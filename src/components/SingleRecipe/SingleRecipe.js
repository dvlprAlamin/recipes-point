import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()
    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
        .then(res => res.json())
        .then(data => setRecipe(data.meals[0]))
    },[])
    
    return (
        <div>
            <img src={recipe.strMealThumb} alt=""/>
            <h1>{recipe.strMeal}</h1>
        </div>
    );
};

export default SingleRecipe;