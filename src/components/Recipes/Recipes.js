import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {RecipeContext} from '../../RecipeContext'
import './Recipes.css'
const Recipes = () => {
    // const [recipes, setRecipes] = useContext(RecipeContext)
    const {by, name} = useParams();
    const [recipes, setRecipes] = useState([]);
    let byValue = '';
    by === 'category' && (byValue = 'c') 
    by === 'nation' && (byValue = 'a') 
    by === 'ingredient' && (byValue = 'i')
    useEffect(()=> {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${byValue}=${name}`
        fetch(url)
        .then(res => res.json())
        .then(data => setRecipes(data.meals || {}))
    },[])
    console.log(recipes);
    return (
        <div className="container-box container">
            {
                recipes.map(recipe => 
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