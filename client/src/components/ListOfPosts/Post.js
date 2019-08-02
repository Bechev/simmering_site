import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import PostContent from './Post/PostContent.js'
import PostContentControlPanel from './Post/PostControlPanel.js'
import '../components.css';
import ListOfComments from './ListOfComments.js';
// import NewPostForm from './NewPostForm.js';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: this.props.post,
        }
    }

    renderComments(){
        if(this.props.idsOfPostsFromWhichDisplaComments.includes(this.props.post.id) && this.props.isComment===false){
            return(
                    // <NewPostForm/>
                    <ListOfComments post={this.props.post}/>
            )
        }
        
    }

    render() {
        return(
            <div className="post">
                <PostContent 
                    post={this.state.post}
                    isComment={this.props.isComment}/>

                <PostContentControlPanel 
                    post={this.state.post}
                    isComment={this.props.isComment}/>
                {this.renderComments()}
            </div>
            )
        }

}
  
const mapStateToProps = (state) => {
    return {
        idsOfPostsFromWhichDisplaComments: state.comments.idsOfPostsFromWhichDisplaComments,
    }
  }
   
export default withRouter(connect(mapStateToProps, null)(Post));