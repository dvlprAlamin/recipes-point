import React, { useContext } from 'react';
import { ContextApi } from '../../ContextApi'
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories] = useContext(ContextApi)
    return (
        <div className="container-box container">
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
    );
};

export default Categories;