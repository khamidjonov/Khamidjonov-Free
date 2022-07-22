import { useState } from 'react';

const SearchMeals = ({ searchMeals, showAllCategories }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="row">
      <div className="input-fields col s12">
        <input
          type="search"
          id="search-field"
          value={searchValue}
          placeholder="Search for ..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              searchMeals(e.target.value);
            }
          }}
          onChange={(e) => {
            setSearchValue(e.target.value);
            if (!e.target.value.length) {
              showAllCategories();
            }
          }}
        />
        <button className="btn" onClick={() => searchMeals(searchValue)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchMeals;
