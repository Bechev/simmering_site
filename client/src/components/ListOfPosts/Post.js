import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PostContent from './Post/PostContent.js'
import PostContentControlPanel from './Post/PostControlPanel.js'
import '../components.css';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: this.props.post,
            isComment: false,
        }
    }

    render() {
        return(
            <div className="post">
                <PostContent 
                    post={this.state.post}
                    isComment={this.state.isComment}/>

                <PostContentControlPanel 
                    post={this.state.post}/>
            </div>
            )
        }

}
  
export default withRouter(Post);