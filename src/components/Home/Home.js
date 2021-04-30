import React from 'react';
import Banner from '../Banner/Banner';
import PopularIngredients from '../PopularIngredients/PopularIngredients';
import RandomIngredients from '../RandomIngredients/RandomIngredients';
import RandomRecipe from '../RandomRecipe/RandomRecipe';

const Home = () => {
    return (
        <>
            <Banner />
            <PopularIngredients />
            <RandomRecipe />
            <RandomIngredients />
        </>
    );
};

export default Home;