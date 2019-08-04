import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

import Post from './Post.js'

import NewPostForm from './NewPostForm.js';
// import Post from './Post.js';
import '../components.css';

class ListOfComments extends Component {

constructor(props){
    super(props);
    this.state = {
        isLoaded: this.props.isLoaded,
        errorMessage: this.props.errorMessage,
        comments: this.props.post.comments
    }
}

componentDidUpdate(prevProps){
    if (this.props !== prevProps){
        this.setState ({
            isLoaded: this.props.isLoaded,
            postComments: this.props.post.comments,
            errorMessage: this.props.errorMessage,
        })
    }
}

renderListOfComments(){
    if(!this.state.isLoaded){
        return(
            <div>
                Loading
            </div>
        )
    }else if(this.state.errorMessage){
        return(
            <div>
                {this.state.errorMessage}
            </div>
        )
    }else if(this.props.post.comments){
        console.log("this.props.post.comments" + this.props.post.comments)
            return(
                this.props.post.comments.map((post)=>{
                    return(
                        <Post key={post.id} post={post} isComment={true}/>
                    )
                })
            )
    }
}

  render() {
      console.log("this happened first")
    return(
        <div className="list_of_posts">
            <NewPostForm post_id={this.props.post.id} isComment={true}/>
            {this.renderListOfComments()}
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isLoaded: state.posts.isLoaded,
        errorMessage: state.posts.errorMessage,
        postComments: state.posts.postComments,
    }
  }
   
export default withRouter(connect(mapStateToProps, null)(ListOfComments));