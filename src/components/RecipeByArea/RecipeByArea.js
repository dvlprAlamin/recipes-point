import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ContextApi} from '../../ContextApi'
import {RecipeContext} from '../../RecipeContext'
const RecipeByArea = () => {
    const [area, setArea] = useContext(ContextApi)
    const [recipes, setRecipes] = useContext(RecipeContext)
    const handleCountry = countryName => {
            fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a='+ countryName)
            .then(res => res.json())
            .then(data => {
                setRecipes(data.meals)
                // console.log(data.meals)
            })
            console.log(area);
    }
    return (
        <div className="container-box container">
            {
                area.map((area, idx) => (
                    <Link 
                    to="/recipes" 
                    onClick={()=>{handleCountry(area.strArea)}} 
                    className="single-item single-country border"
                    style={{minWidth: '300px'}} 
                    key={idx}>
                        <h2>{area.strArea}</h2>
                    </Link>
                ))
            }
            
        </div>
    );
};

export default RecipeByArea;