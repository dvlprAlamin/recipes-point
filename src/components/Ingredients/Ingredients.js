import React, {useContext} from 'react';
import {ContextApi} from '../../ContextApi'
const Ingredients = () => {
    const [ingredients, setIngredients] = useContext(ContextApi)
    console.log(ingredients);
    return (
        <div className="container-box">
            {
                ingredients.map((ingredient, idx) => (
                    <div className="single-item" key={idx}>
                        <h2>{ingredient.strIngredient}</h2>
                        {/* <p>{ingredient.strDescription}</p> */}
                        </div>
                ))
            }
            
        </div>
    )
};

export default Ingredients;