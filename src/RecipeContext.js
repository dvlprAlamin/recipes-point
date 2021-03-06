import { createContext, useState } from "react";
import React from 'react';


export const RecipeContext = createContext();


export const RecipesProvider = props => {
    const [recipes, setRecipes] = useState([]);
   console.log(recipes);
    return (
        <div>
            <RecipeContext.Provider value={[recipes, setRecipes]}>
                {props.children}
            </RecipeContext.Provider>
        </div>
    )
}