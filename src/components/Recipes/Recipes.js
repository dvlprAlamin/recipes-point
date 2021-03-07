import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {RecipeContext} from '../../RecipeContext'
import './Recipes.css'
const Recipes = () => {
    const [recipes, setRecipes] = useContext(RecipeContext)
    console.log(recipes);
    return (
        <div className="container-box container">
            {
                recipes?.map(recipe => 
                <Link 
                to={'/recipe/'+recipe.idMeal} 
                key={recipe.idMeal}
                className="recipe-single">
                    <img src={recipe.strMealThumb} alt=""/>
                    <h6>{recipe.strMeal}</h6>
                </Link>)
            }
        </div>
    );
};

export default Recipes;