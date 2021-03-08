import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../../ContextApi'

const RecipeByArea = () => {
    const [area] = useContext(ContextApi);
    return (
        <div className="container-box container">
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
    );
};

export default RecipeByArea;