import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ContextApi} from '../../ContextApi'
import {RecipeContext} from '../../RecipeContext'
const Ingredients = () => {
    const [ingredients, setIngredients] = useContext(ContextApi)
    const [recipes, setRecipes] = useContext(RecipeContext)
    const handleIngredients = ingredient => {
            fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+ ingredient)
            .then(res => res.json())
            .then(data => {
                setRecipes(data.meals)
                console.log(data.meals)
            })
            
    }
    return (
        <div className="container-box">
            {
                ingredients.map((ingredient, idx) => (
                    <Link to="/recipes" onClick={()=> handleIngredients(ingredient.strIngredient)} className="single-item" key={idx}>
                        <img src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`} alt=""/>
                        <h2>{ingredient.strIngredient}</h2>
                        </Link>
                ))
            }
            
        </div>
    )
};

export default Ingredients;