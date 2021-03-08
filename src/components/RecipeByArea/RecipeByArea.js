import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeByArea = () => {
    const [area, setArea] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
            .then(res => res.json())
            .then(data => setArea(data.meals))
    }, []);
    return (
        <div className="container" style={{minHeight:'calc(100vh - 180px)'}}>
            <div className="container-box">
            {
                area.map((area, idx) => (
                    <Link
                        to={`nation/${area.strArea}/recipes`}
                        className="single-item single-country border"
                        style={{ minWidth: '300px' }}
                        key={idx}>
                        <h2>{area.strArea}</h2>
                    </Link>
                ))
            }

        </div>
        </div>
    );
};

export default RecipeByArea;