import React from 'react';
import './PostContainer.css';
import PostContainer from './PostContainer';
import PropTypes from 'prop-types';

const Posts = props => {
    return (
        <div className="posts">
            {props.search.length > 0 
            ? props.data.filter(data => data.username.slice(0, props.search.length) === props.search).length > 0 
                ? props.data.filter(data => data.username.slice(0, props.search.length) === props.search).map((data, index) => <PostContainer data={data} key={index}/>) 
                : <h2>No Results Found</h2>
            : props.data.map((data, index) => <PostContainer data={data} key={index}/>)}
        </div>
    );
}
Posts.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}
export default Posts;