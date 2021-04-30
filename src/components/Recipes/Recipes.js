import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GetContext } from '../../ContextApi';
import Loader from '../Loader/Loader';
import './Recipes.css'
const Recipes = () => {
    const { searchResult, loading, setLoading } = GetContext();
    const { by, name, search } = useParams();
    console.log(search);
    console.log(useParams());
    const [recipes, setRecipes] = useState([]);
    let byValue = '';
    by === 'category' && (byValue = 'c')
    by === 'nation' && (byValue = 'a')
    by === 'ingredient' && (byValue = 'i')
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${byValue}=${name}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRecipes(data.meals);
                // setLoading(false)
            })
    }, [byValue, name, setLoading])
    return (
        <div className="page-min-height">
            <div className="container-box container">
                {
                    <>
                        {!search && recipes.length === 0 ? <Loader /> :
                            recipes.map(recipe =>
                                <Link
                                    to={'/recipe/' + recipe.idMeal}
                                    key={recipe.idMeal}
                                    className="recipe-single">
                                    <img src={recipe.strMealThumb} alt="" />
                                    <h6>{recipe.strMeal}</h6>
                                </Link>)}
                        {search && searchResult.length === 0 ? <Loader /> :
                            searchResult.map(recipe =>
                                <Link
                                    to={'/recipe/' + recipe.idMeal}
                                    key={recipe.idMeal}
                                    className="recipe-single">
                                    <img src={recipe.strMealThumb} alt="" />
                                    <h6>{recipe.strMeal}</h6>
                                </Link>)}
                    </>
                }
            </div>
        </div>
    );
};

export default Recipes;