import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


const PostContainer = props => {
    // console.log(props)
    return (
        <div className="post-container">
            <div className="post-header">
                <img className="profile" src={props.data.thumbnailUrl} alt=""/>
                <p className="username">{props.data.username}</p>
            </div>
            <img className="image" src={props.data.imageUrl} alt="" />
                <div className="likes">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <p className='likes'>{props.data.likes} likes</p>
             </div>
            <CommentSection comments={props.data.comments} data={props.data} />

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