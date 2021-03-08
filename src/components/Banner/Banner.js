import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner d-flex align-items-center'>
            <div className="container banner-text d-flex flex-column text-white px-5">
                <h1>Welcome to <span>Recipes Point</span></h1>
                <p>Learn different types of recipe from here. Find recipes with categories, nationalities, ingredients and so on. </p>
            </div>
        </div>
    );
};

export default Banner;