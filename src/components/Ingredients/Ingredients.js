import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../../ContextApi'
import './Ingredients.css'
const Ingredients = () => {
    const [ingredients] = useContext(ContextApi)
    return (
        <div className="ingredients-container container">
            {
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