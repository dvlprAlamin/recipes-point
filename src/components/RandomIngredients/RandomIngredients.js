import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../../ContextApi'

const RandomIngredients = () => {
    const [ingredients] = useContext(ContextApi)
    const random = Math.floor(Math.random() * 100);
    let randomIngredients = []
    for (let i = random; i <= random + 440; i += 40) {
        randomIngredients.push(ingredients[i] || {})
    }
    return (
        <div className="container mt-5">
            <h1 className="text-center section-title">Random Ingredients</h1>
            <div className="ingredients-container py-5">
                {
                    randomIngredients.map((ingredient, idx) => (
                        <Link
                            key={idx}
                            to={`ingredient/${ingredient.strIngredient}/recipes`}
                            className="single-ingredient">
                            <img
                                src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
                                alt={ingredient.strIngredient} />
                            <h5>{ingredient.strIngredient}</h5>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default RandomIngredients;