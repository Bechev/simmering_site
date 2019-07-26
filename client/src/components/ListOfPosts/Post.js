import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PostContent from './Post/PostContent.js'
import PostContentControlPanel from './Post/PostControlPanel.js'
import '../components.css';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            postContent: this.props.post.message,
            isComment: false,
            numberOfLikes: this.props.post.likes,
            numberOfReshares: this.props.post.reshares,
            id: this.props.key
        }
    }

    render() {
        return(
            <div className="post">
                <PostContent postContent={this.state.postContent} isComment={this.state.isComment}/>
                <PostContentControlPanel likes={this.state.numberOfLikes} reshares={this.state.numberOfReshares} />
            </div>
            )
        }

}
  
export default withRouter(Post);