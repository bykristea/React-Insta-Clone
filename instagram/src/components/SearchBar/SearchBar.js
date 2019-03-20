import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar.css';

const Search = (props) => {
 return (
    <div className="search">
       
        <header className="App-header">
        <div className="instagram">
          <span className="logo">
            <i className="fas fa-camera-retro" />
          </span>
          <span className="line">│</span>
          <span className="title">Insta</span>
        </div>

        <input type="text" name='searchPosts' value={props.text} onChange={ props.changed} placeholder="🔍 Search" />

        <div className="icons">
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </div>
      </header>
      </div>
  )
}

Search.propTypes = {
  props: PropTypes.object
}


  export default Search;