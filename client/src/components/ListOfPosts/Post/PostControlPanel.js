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
                <LikeButton/>
                <ShareButton/>
                <CommentButton/>
            </div>
            )
        }

}
  
export default withRouter(PostControlPanel);