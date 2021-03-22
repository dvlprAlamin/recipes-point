import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

const RecipeByArea = () => {
    const [area, setArea] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
            .then(res => res.json())
            .then(data => {
                setArea(data.meals);
                setLoading(false)
            })
    }, []);
    return (
        <div className="container" style={{minHeight:'calc(100vh - 180px)'}}>
            <div className="container-box">
            {
                loading ? <Loader/> :
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