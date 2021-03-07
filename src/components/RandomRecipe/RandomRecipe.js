import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RandomRecipe.css'
const RandomRecipe = () => {
    const [recipe, setRecipe] = useState({})
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => setRecipe(data?.meals[0]))
    },[])
    console.log(recipe);
    const {strMealThumb,strMeal,idMeal} = recipe;
    return (
        <div className="container mt-5">
            <h1 className="text-center section-title">A Random Recipe</h1>
            <div className="random-recipe">
                <img src={strMealThumb} alt=""/>
                <h4 className="my-3"><Link to={'/recipe/'+idMeal}>{strMeal}</Link></h4>
            </div>
        </div>
    );
};

export default RandomRecipe;