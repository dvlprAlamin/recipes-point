import { createContext, useContext, useEffect, useState } from "react";
import React from 'react';

const ContextApi = createContext();
export const GetContext = () => {
    const provider = useContext(ContextApi);
    return provider;
}

export const ContextProvider = props => {
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
            .then(res => res.json())
            .then(data => {
                setIngredients(data.meals);
                // setLoading(false);
            })
            .catch(err => {
                // setLoading(false);
            })
    }, []);
    const value = {
        ingredients,
        setIngredients,
        searchResult,
        setSearchResult,
        loading,
        setLoading
    }
    return (
        <div>
            <ContextApi.Provider value={value}>
                {props.children}
            </ContextApi.Provider>
        </div>
    )
}