import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import LikeButton from './PostControlPanel/LikeButton.js'
import ShareButton from './PostControlPanel/ShareButton.js'
import CommentButton from './PostControlPanel/CommentButton.js'
import '../../components.css';

class PostControlPanel extends Component {

    renderCommentButton(){
        if(!this.props.isComment){
            return(
                <React.Fragment>
                    <ShareButton 
                        post={this.props.post}/>
                    <CommentButton
                        post={this.props.post}/>
                </React.Fragment>
            )
        }
    }

    render() {
        return(
            <div className="post_control_panel">
                <LikeButton 
                    post={this.props.post}/>
                
                    {this.renderCommentButton()}
            </div>
            )
        }

}
  
export default withRouter(PostControlPanel);