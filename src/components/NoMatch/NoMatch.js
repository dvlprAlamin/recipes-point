import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div 
        style={{minHeight:'calc(100vh - 150px)'}}
        className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-danger"> 404 Not Found!</h1>
            <Link to="/" className="btn btn-light">Go Back</Link>
        </div>
    );
};

export default NoMatch;