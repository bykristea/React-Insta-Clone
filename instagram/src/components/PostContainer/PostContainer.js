import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


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

class PostContainer extends Component {
    constructor(props) {
        super(props)
        this.state={
            data: props.data,
            likes:props.data.likes, 
            likeStatus: false, 
        }
    }

    clickedImg = () =>{
        if (this.state.likeStatus === false){
          console.log("Inside if")
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
            <div className="post-container">
             <div className="post-header">
                 <img className="profile" src={this.state.data.thumbnailUrl} alt=""/>
                 <p className="username">{this.state.data.username}</p>
             </div>
             <img className="image" src={this.state.data.imageUrl} alt="" />
                 <div className="likes">
                 <i {...this.state.likeStatus ? <i class="far fa-heart"></i> : <i class="fas fa-heart"></i>} onClick={this.clickedImg}></i>
                 <i className="far fa-comment"></i>
                 <p className='likes'>{this.state.likes} likes</p>
              </div>
            <CommentSection comments={this.state.data.comments} data={this.state.data} />

         </div> 
        )
    }
}

PostContainer.propTypes = {
        data: PropTypes.shape({
        username: PropTypes.string, 
        imageUrl: PropTypes.string, 
        likes: PropTypes.number, 
        timestamp: PropTypes.string, 

    })
}

export default PostContainer;