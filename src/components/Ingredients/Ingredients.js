import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ContextApi} from '../../ContextApi'
import {RecipeContext} from '../../RecipeContext'
import './Ingredients.css'
const Ingredients = () => {
    const [ingredients, setIngredients] = useContext(ContextApi)
    // const [recipes, setRecipes] = useContext(RecipeContext)
    // const handleIngredients = ingredient => {
    //         fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+ ingredient)
    //         .then(res => res.json())
    //         .then(data => {
    //             setRecipes(data.meals)
    //             console.log(data.meals)
    //         })
            
    // }
    return (
        <div className="ingredients-container container">
            {
                ingredients.map((ingredient, idx) => (
                    <Link to={`ingredient/${ingredient.strIngredient}/recipes`}
                     //onClick={()=> handleIngredients(ingredient.strIngredient)} 
                     className="single-ingredient" key={idx}>
                        <img src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt=""/>
                        <h5>{ingredient.strIngredient}</h5>
                        </Link>
                ))
            }
            
        </div>
    )
};

export default Ingredients;