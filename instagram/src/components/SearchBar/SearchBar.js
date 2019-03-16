import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import searchbar from './SearBar.css';

const SearchBar = (props) => {
 return (
    <div className="input">
      <form>
         <input 
          name="search"
          type="text" 
          placeholder="Search" 
          onChange={props.changeHandler}
          onSubmit={props.filterUsernames}
          // value={props.search}
          />
       </form>
    </div>
  )
}

  export default SearchBar;