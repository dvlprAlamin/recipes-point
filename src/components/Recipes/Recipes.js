import React, { useContext } from 'react';
import { ContextApi } from '../../ContextApi'
const Recipes = () => {
    const [recipes, setRecipes] = useContext(ContextApi);
    console.log(recipes);
    return (
        <div>
            {
                recipes.map(recipe => 
                <div key={recipe.idMeal}>
                    <img src={recipe.strMealThumb} alt=""/>
                    <h3>{recipe.strMeal}</h3>
                </div>)
            }
        </div>
    );
};

export default Recipes;