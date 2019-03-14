import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

class Comment extends Component {
    constructor(props){
        super(props);
         this.state = {
             username: props.username, 
             text: props.text
         };
    }

    render() {
        return (
            <div>
            <div className="comment">
                <p className="username">{this.state.username}</p>
                <p className="text-comment">{this.state.text}</p>
                
            </div>
            {/* <input type="text" value="comment"/> */}

            </div>
        )
    }
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;