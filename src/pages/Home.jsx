import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { getAllCategories } from '../API';

import Loader from '../components/Loader';
import CategoryList from './../components/CategoryList';
import SearchMeals from './../components/SearchMeals';

const Home = () => {
  // States
  const [data, setData] = useState([]);
  const [catalog, setCatalog] = useState([]);

  // useLocation & useNavigate
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  // Fetch categories from API
  useEffect(() => {
    getAllCategories().then((data) => {
      setData(data.categories);

      setCatalog(data.categories);
    });
  }, []);

  // Searching Meals
  const searchMeals = (value) => {
    const newCatalog = [...catalog];
    if (value) {
      setCatalog(
        newCatalog.filter((item) =>
          item.strCategory.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setCatalog(catalog);
    }
  };

  // Show All Categories
  const showAllCategories = () => {
    setCatalog([...data]);
  };

  return (
    <div>
      <SearchMeals
        searchMeals={searchMeals}
        showAllCategories={showAllCategories}
      />
      {!catalog.length ? (
        <h4>Nothing Found</h4>
      ) : (
        <CategoryList catalog={catalog} />
      )}
    </div>
  );
};

export default Home;
