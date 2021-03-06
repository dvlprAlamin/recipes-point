import React, { useContext } from 'react';
import {RecipeContext} from '../../RecipeContext'
const Recipes = () => {
    const [recipes, setRecipes] = useContext(RecipeContext)
    console.log(recipes);
    return (
        <div>
            {
                recipes?.map(recipe => 
                <div key={recipe.idMeal}>
                    <img src={recipe.strMealThumb} alt=""/>
                    <h3>{recipe.strMeal}</h3>
                </div>)
            }
        </div>
    );
};

export default Recipes;