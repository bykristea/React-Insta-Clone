import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './CommentSection.css';
import styled from 'styled-components';

const UserName = styled.p `
  font-weight: bold;
  
  margin: 0 5px;
  align-content: center;
`;
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
                <UserName>{this.state.username}</UserName>
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