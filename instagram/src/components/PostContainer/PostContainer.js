import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


const PostContainer = props => {
    // console.log(props)
    return (
        <div className="post-container">
            <div className="post-header">
                <img src={props.data.imageUrl} alt=""/>
                <p>{props.data.username}</p>
            </div>
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