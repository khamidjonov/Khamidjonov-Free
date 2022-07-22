import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  console.log(strCategoryDescription.length);

  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{strCategory}</h3>
        <p>
          {strCategoryDescription.length > 100
            ? `${strCategoryDescription.slice(0, 100)}...`
            : strCategoryDescription}
        </p>
      </div>
      <div className="card-action">
        <Link to={`category/${strCategory}`} className="btn">
          Watch Category
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
