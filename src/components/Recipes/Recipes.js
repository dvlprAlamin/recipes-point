import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {RecipeContext} from '../../RecipeContext'
const Recipes = () => {
    const [recipes, setRecipes] = useContext(RecipeContext)
    console.log(recipes);
    return (
        <div>
            {
                recipes?.map(recipe => 
                <Link to={'/recipe/'+recipe.idMeal} key={recipe.idMeal}>
                    <img src={recipe.strMealThumb} alt=""/>
                    <h3>{recipe.strMeal}</h3>
                </Link>)
            }
        </div>
    );
};

export default Recipes;