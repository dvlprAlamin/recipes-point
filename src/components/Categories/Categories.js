import React, {createContext, useContext , useState} from 'react';
import {ContextApi} from '../../ContextApi'
import { Link } from 'react-router-dom';
import './Categories.css'
const Categories = () => {
    const [categories, setCategories] = useContext(ContextApi)
    const [recipes, setRecipes] = useContext(ContextApi)
    const handleCategory = categoryName => {
            fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+categoryName)
            .then(res => res.json())
            .then(data => {
                setRecipes(data.meals)
                // console.log(data.meals)
            })
            
    }
    console.log(useContext(ContextApi));
    return (
        <div className="container-box">
            {
                categories.map((category, idx) => (
                    <div onClick={()=> handleCategory(category.strCategory)} className="single-item" key={idx}>
                        <img src={category.strCategoryThumb} alt=""/>
                        <h2>{category.strCategory}</h2>
                        </div>
                ))
            }
            
        </div>
    );
};

export default Categories;