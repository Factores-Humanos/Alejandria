// src/components/SearchForm.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
    return (
        <form className="d-flex">
            <input className="form-control me-1 search-bar" type="search" placeholder="Buscar un libro" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    );
};

export default SearchForm;
