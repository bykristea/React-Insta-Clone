import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className="comment-section">
            CommentSection
            {props.comments.map(comment => (
                <Comment username={comment.username}
                text={comment.text}
                key={comment.text}
                />
            ))}
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;