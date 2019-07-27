import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import LikeButton from './PostControlPanel/LikeButton.js'
import ShareButton from './PostControlPanel/ShareButton.js'
import CommentButton from './PostControlPanel/CommentButton.js'
import '../../components.css';

class PostControlPanel extends Component {

    render() {
        return(
            <div className="post_control_panel">
                <LikeButton 
                    postId={this.props.postId} 
                    numberOfLikes={this.props.numberOfLikes}/>
                <ShareButton 
                    postId={this.props.postId} 
                    numberOfReshares={this.props.numberOfReshares}/>
                <CommentButton/>
            </div>
            )
        }

}
  
export default withRouter(PostControlPanel);