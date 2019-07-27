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
            numberOfReshares: this.props.post.reshare,
            id: this.props.post.id
        }
    }

    render() {
        return(
            <div className="post">
                <PostContent 
                    postId={this.state.id} 
                    postContent={this.state.postContent}/>

                <PostContentControlPanel 
                    postId={this.state.id} 
                    numberOfLikes={this.state.numberOfLikes} 
                    numberOfReshares={this.state.numberOfReshares}/>
            </div>
            )
        }

}
  
export default withRouter(Post);