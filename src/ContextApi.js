import { createContext, useEffect, useState } from "react";
import React from 'react';

export const ContextApi = createContext();


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