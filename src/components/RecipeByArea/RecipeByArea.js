import React, {useContext} from 'react';
import {ContextApi} from '../../ContextApi'
const RecipeByArea = () => {
    const [area, setArea] = useContext(ContextApi)
    return (
        <div className="container-box">
            {
                area.map((area, idx) => (
                    <div className="single-item" key={idx}><h2>{area.strArea}</h2></div>
                ))
            }
            
        </div>
    );
};

export default RecipeByArea;