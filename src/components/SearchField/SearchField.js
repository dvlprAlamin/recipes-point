import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GetContext } from '../../ContextApi';
import './SearchField.css'
const SearchField = () => {
    const history = useHistory();
    const { searchResult, setSearchResult, setLoading } = GetContext();
    const [search, setSearch] = useState('')
    useEffect(() => {
        // if (search === '') return;
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSearchResult(data.meals)
                // setLoading(false)
            })
    }, [search, setSearchResult])

    return (
        <div className="search-container">
            <div className="d-flex ml-auto">
                <input onBlur={(e) => setSearch(e.target.value)} type="text" name="search" placeholder="Search recipe..." id="search-field" style={{ maxWidth: 200 }} />
                <button
                    onClick={() => search && history.push(`/${search}/recipes`)}
                    className="search-btn">Search
                </button>
            </div>
            {
                search &&
                <h4 className="text-white available-result">Available recipes: {searchResult?.length || 0}</h4>
            }
        </div>
    );
};

export default SearchField;