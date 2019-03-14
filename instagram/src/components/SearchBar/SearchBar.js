import React, { Component } from 'react';
import PropTypes from 'prop-types';
import searchbar from './SearBar.css';

const SearchBar = () => {
    return (
      <div className="input">
        <input type="text" placeholder="Search" />
      </div>
    );
  };
  
  export default SearchBar;