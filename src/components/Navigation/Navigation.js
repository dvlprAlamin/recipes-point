import { Link } from 'react-router-dom';
import logo from '../../img/logo-small.png'
import React from 'react';
import './Navigation.css'
const Navigation = () => {
    return (
        <nav id="menu" className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand logo" to="/"><img src={logo} alt=""/> Recipes Point</Link>
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/area">Recipe by Nation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ingredients">Ingredients</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navigation;