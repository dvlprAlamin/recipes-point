import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import VideoTutorial from '../VideoTutorial/VideoTutorial';
import './SingleRecipe.css'
const SingleRecipe = () => {
    const [recipe, setRecipe] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
            .then(res => res.json())
            .then(data => setRecipe(data.meals[0]))
    }, [])
    console.log(recipe);
    const { strMealThumb, strMeal, strArea, strCategory, strInstructions, strYoutube } = recipe || {}
    const youtubeEmbed = strYoutube?.replace('watch?v=', 'embed/') || '';
    // make an array by values from object
    const propertyValues = Object.values(recipe);
    // slice ingredient part from the array
    const ingredientsArray = propertyValues.slice(9, 29);
    // remove empty and null value from array
    const ingredients = ingredientsArray.filter(item => item);

    const measureArray = propertyValues.slice(29, 49);

    const measure = measureArray.filter(item => item);
    return (
        <div className="container single-recipe-item">
            <div className="row my-4">
                <div className="single-recipe-img col-lg-7 col-md-12">
                    <img src={strMealThumb} alt="" />
                </div>
                <div className="recipe-info col-lg-5  col-md-12">
                    <h1 className="text-white">{strMeal}</h1>
                    <p className="text-white">|<span> Category:</span> {strCategory} | <span> Nation: </span> {strArea} |</p>
                    <h3>Ingredients:</h3>
                    <div className="ingredients-measure d-flex">
                        <ul className="p-0 ingredients-list mr-2">
                            {
                                ingredients.map((ingredient, idx) => <li key={idx}> {ingredient}</li>)
                            }
                        </ul>
                        <ul className="p-0 measure-list text-white">
                            {
                                measure.map((measure, idx) => <li key={idx}> {measure}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="instruction mb-5">
                <h2 className="section-title text-center">Instruction</h2>
                <p className="text-white">{strInstructions}</p>
            </div>
            {youtubeEmbed && <VideoTutorial youtubeEmbed={youtubeEmbed}/>}
        </div>
    );
};

export default SingleRecipe;