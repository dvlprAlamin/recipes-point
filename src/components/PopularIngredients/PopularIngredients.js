import React  from 'react';
import { Link } from 'react-router-dom';
import { GetContext } from '../../ContextApi'

const PopularIngredients = () => {
    const {ingredients} = GetContext()
    const popularIngredients = ingredients.slice(0, 8) || {};
    return (
        <div className="container mt-5">
            <h1 className="text-center section-title">Popular Ingredients</h1>
            <div className="ingredients-container py-5">
                {
                    popularIngredients.map(ingredient => (
                        <Link
                            to={`ingredient/${ingredient.strIngredient}/recipes`}
                            className="single-ingredient"
                            key={ingredient.idIngredient}>
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

export default PopularIngredients;