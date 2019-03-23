import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
// import './PostContainer.css';
import heart from '../../img/heart-regular.svg';
import solidHeart from '../../img/heart-solid.svg';
import styled from 'styled-components';

// const PostContainer = props => {
//     // console.log(props)
//     return (
//         <div className="post-container">
//             <div className="post-header">
//                 <img className="profile" src={props.data.thumbnailUrl} alt=""/>
//                 <p className="username">{props.data.username}</p>
//             </div>
//             <img className="image" src={props.data.imageUrl} alt="" />
//                 <div className="likes">
//                 <i className="far fa-heart"></i>
//                 <i className="far fa-comment"></i>
//                 <p className='likes'>{props.data.likes} likes</p>
//              </div>
//             <CommentSection comments={props.data.comments} data={props.data} />

//         </div>
//     )
// };


const Post = styled.div `
    border: 1px solid lightgrey;
    height: auto;
    width: 100%; 
    margin-bottom: 50px;

    i {
      width: 20px;
      height: 20px;
    }
`;

const PostHeader = styled.div `
    display: flex;
    margin: 10px; 
    align-content: center;
    align: center;
`;

const ProfileImg = styled.img `
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const UserName = styled.p `
  font-weight: bold;
  margin-top: 15px;
  margin-left: 5px;
  align-content: center;
`;

const PostImg = styled.img `
  width: 100%;
`;

const LikesImg = styled.img `
  
  margin-right: 10px;
`;

const LikeCount = styled.p `
 text-align: left;
font-weight: bold;
margin-left: 10px;

`;

const PostFooter = styled.div `
display: flex;
margin-top: 5px;
margin-left: 10px;
align-content: center;
align-items: center;

`;
const TimeStamp = styled.p ``;
class PostContainer extends Component {
    constructor(props) {
        super(props)
        this.state={
            data: props.data,
            likes:props.data.likes, 
            likeStatus: false, 
            timestamp:props.data.timestamp
        }
    }

    clickedImg = () =>{
        if (this.state.likeStatus === false){
          this.setState({
            likeStatus: true,
            likes: this.state.likes + 1,
          })
        } else {
          this.setState(
            {
            likeStatus: false,
            likes: this.state.likes - 1,
          })
        }
      }
    render() {
        return (
            <Post>
             <PostHeader>
                 <ProfileImg src={this.state.data.thumbnailUrl} alt=""/>
                 <UserName>{this.state.data.username}</UserName>
             </PostHeader>
             <PostImg src={this.state.data.imageUrl} alt="" />
                
                <PostFooter>
                  <LikesImg src={this.state.likeStatus ? solidHeart : heart} alt="heart" height="20" width="20" onClick={this.clickedImg}/>
                  <i className="far fa-comment"></i>
                </PostFooter>
                <LikeCount>{this.state.likes} likes</LikeCount>

            <CommentSection comments={this.state.data.comments} data={this.state.data} />
            
            <TimeStamp>{this.state.timestamp}</TimeStamp>   
         </Post> 
        )
    }
}

PostContainer.propTypes = {
        data: PropTypes.object
}

export default PostContainer;