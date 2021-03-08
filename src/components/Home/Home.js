import React from 'react';
import Banner from '../Banner/Banner';
import Loader from '../Loader/Loader';
import PopularIngredients from '../PopularIngredients/PopularIngredients';
import RandomIngredients from '../RandomIngredients/RandomIngredients';
import RandomRecipe from '../RandomRecipe/RandomRecipe';

const Home = () => {
    return (
        <>  
            {/* <Loader/> */}
            <Banner />
            <PopularIngredients />
            <RandomRecipe />
            <RandomIngredients />
        </>
    );
};

export default Home;