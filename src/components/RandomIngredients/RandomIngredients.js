import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {ContextApi} from '../../ContextApi'

const RandomIngredients = () => {
    const [ingredients, setIngredients] = useContext(ContextApi)

    // const [ingredients, setIngredients] = useState([])
    // useEffect(()=> {
    //     fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    //     .then(res => res.json())
    //     .then(data => setIngredients(data.meals))
    // },[])
    const random = Math.floor(Math.random()*100);
    let randomIngredients = []
    for (let i = random; i <= random + 440; i+=40) {
        randomIngredients.push(ingredients[i])
    }
    console.log(randomIngredients);
    return (
        <div className="container-box">
        {
            randomIngredients.map(ingredient => (
                <Link to="/recipes" className="single-item" key={ingredient.idIngredient}>
                    <img src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`} alt={ingredient.strIngredient}/>
                    <h2>{ingredient.strIngredient}</h2>
                    </Link>
            ))
        }
        
    </div>
    );
};

export default RandomIngredients;