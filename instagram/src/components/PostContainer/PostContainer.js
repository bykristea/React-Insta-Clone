import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


const PostContainer = props => {
    console.log(props)
    return (
        <div className="post-container">
            PostContainer
            <CommentSection comments={props.data.comments} />
        </div>
    )
};

PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string, 
        imageUrl: PropTypes.string, 
        likes: PropTypes.number, 
        timestamp: PropTypes.string, 

    })
}

export default PostContainer;