import React, {createContext, useContext , useState} from 'react';
import {ContextApi} from '../../ContextApi'
import {RecipeContext} from '../../RecipeContext'
import { Link } from 'react-router-dom';
import './Categories.css'
const Categories = () => {
    const [categories, setCategories] = useContext(ContextApi)
    const [recipes, setRecipes] = useContext(RecipeContext)
    const handleCategory = categoryName => {
            fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+categoryName)
            .then(res => res.json())
            .then(data => setRecipes(data.meals))
    }
    return (
        <div className="container-box container">
            {
                categories.map((category, idx) => (
                    <Link 
                    to="/recipes" 
                    onClick={()=> handleCategory(category.strCategory)} 
                    className="single-item"
                    key={idx}>
                        <img src={category.strCategoryThumb} alt=""/>
                        <h2>{category.strCategory}</h2>
                    </Link>
                ))
            }
            
        </div>
    );
};

export default Categories;