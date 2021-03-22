import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchField.css'
const SearchField = () => {
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
        useEffect(()=>{
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
            fetch(url)
            .then(res => res.json())
            .then(data => setSearchResult(data.meals))
        },[search])

    return (
        <div className="search-container">
        <div className="d-flex ml-auto">
            <input onChange={(e) => setSearch(e.target.value)} type="text" name="search" placeholder="Search recipe..." id="search-field" className="form-control" style={{maxWidth:200}}/>
            <Link to={`${search}/recipes`}>
                <button className="btn btn-primary">Search</button>
            </Link>
        </div>
        
        {
            search &&
            <h4 className="text-white available-result">Available recipes: {searchResult?.length || 0}</h4>
        }
        </div>
    );
};

export default SearchField;