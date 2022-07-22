import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { filterMealsByCategory } from '../API';

import MealList from './../components/MealList';
import Loader from './../components/Loader';

const Category = () => {
  const { name } = useParams();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    filterMealsByCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <div>{!meals.length ? <Loader /> : <MealList meals={meals} />}</div>;
};

export default Category;
