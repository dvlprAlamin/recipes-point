import { createContext, useEffect, useState } from "react";
import React from 'react';

export const ContextApi = createContext();

export const CategoriesProvider = props => {
    const [categories, setCategories] = useState([]);
    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setCategories(data.categories))
    },[]);
    return (
        <div>
            <ContextApi.Provider value={[categories, setCategories]}>
                {props.children}
            </ContextApi.Provider>
        </div>
    );
};

export const RecipesProvider = props => {
    const [recipes, setRecipes] = useState([]);
    return (
        <div>
            <ContextApi.Provider value={[recipes, setRecipes]}>
                {props.children}
            </ContextApi.Provider>
        </div>
    )
}

export const AreaProvider = props => {
    const [area, setArea] = useState([]);
    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then(res => res.json())
        .then(data => setArea(data.meals))
    },[]);
    return (
        <div>
            <ContextApi.Provider value={[area, setArea]}>
                {props.children}
            </ContextApi.Provider>
        </div>
    )
}

export const IngredientsProvider = props => {
    const [ingredients, setIngredients] = useState([]);
    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then(res => res.json())
        .then(data => setIngredients(data.meals))
    },[]);
    return (
        <div>
            <ContextApi.Provider value={[ingredients, setIngredients]}>
                {props.children}
            </ContextApi.Provider>
        </div>
    )
}