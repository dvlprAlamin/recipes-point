import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setCategories(data.categories))
    }, []);
    return (
        <div className="container" style={{minHeight:'calc(100vh - 180px)'}}>
             <div className="container-box">
            {
                categories.map((category, idx) => (
                    <Link
                        to={`category/${category.strCategory}/recipes`}
                        className="single-item"
                        key={idx}>
                        <img src={category.strCategoryThumb} alt="" />
                        <h2>{category.strCategory}</h2>
                    </Link>
                ))
            }

        </div>
        </div>
    );
};

export default Categories;