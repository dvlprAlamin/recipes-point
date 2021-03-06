import React from 'react';
import Banner from '../Banner/Banner';
import RandomIngredients from '../RandomIngredients/RandomIngredients';
import RandomRecipes from '../RandomRecipes/RandomRecipes';

const Home = () => {
    return (
        <>
            <Banner />
            <RandomRecipes />
            {/* <RandomIngredients/> */}
        </>
    );
};

export default Home;