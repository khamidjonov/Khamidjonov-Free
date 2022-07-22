import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getMealById } from '../API';

const Meal = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [recipe, setRecipe] = useState([]);
  const [showInstruction, setShowInstruction] = useState(false);

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <div>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="recipe">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h2> {recipe.strMeal} </h2>
        <h5>
          <b>Category:</b> {recipe.strCategory}{' '}
        </h5>
        {recipe.strArea && (
          <h5>
            <b>Area:</b> {recipe.strArea}{' '}
          </h5>
        )}
        <button
          className="btn"
          onClick={() => setShowInstruction(!showInstruction)}
        >
          {!showInstruction ? 'Show' : 'Hide'} Instruction
        </button>
        {showInstruction && <p> {recipe.strInstructions} </p>}
        <table>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(recipe).map((key) => {
              if (key.includes('Ingredient') && recipe[key]) {
                return (
                  <tr key={key}>
                    <td>{recipe[key]}</td>
                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        {recipe.strYoutube && (
          <iframe
            width="727"
            height="409"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
              -11
            )}`}
            title={recipe.strMeal}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Meal;
