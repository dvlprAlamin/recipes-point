import React from 'react';
import { Link } from 'react-router-dom';
import { GetContext } from '../../ContextApi'
import Loader from '../Loader/Loader';
import './Ingredients.css'
const Ingredients = () => {
    const { ingredients } = GetContext()
    return (
        <div className="ingredients-container container">
            {
                ingredients.length === 0 ? <Loader /> :
                    ingredients.map((ingredient, idx) => (
                        <Link to={`ingredient/${ingredient.strIngredient}/recipes`}
                            className="single-ingredient" key={idx}>
                            <img src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt="" />
                            <h5>{ingredient.strIngredient}</h5>
                        </Link>
                    ))
            }

        </div>
    )
};

export default Ingredients;