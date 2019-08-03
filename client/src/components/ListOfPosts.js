import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

import NewPostForm from './ListOfPosts/NewPostForm.js';
import Post from './ListOfPosts/Post.js';
import './components.css';

class ListOfPosts extends Component {

constructor(props){
    super(props);
    this.state = {
        isLoaded: this.props.isLoaded,
        errorMessage: this.props.errorMessage,
        lastPublicPosts: this.props.lastPublicPosts
    }
}

componentDidUpdate(prevProps){
    if (this.props !== prevProps){
        this.setState ({
            isLoaded: this.props.isLoaded,
            lastPublicPosts: this.props.lastPublicPosts,
            errorMessage: this.props.errorMessage,
        })
    }
}

renderListOfPosts(){
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
    }else{
        return(
            this.state.lastPublicPosts.map((post)=>{
                return(
                    <Post key={post.id} post={post} isComment={false}/>
                )
            })
        )
    }
}

  render() {
    return(
        <div className="list_of_posts">
            <NewPostForm isComment={false}/>
            {this.renderListOfPosts()}
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isLoaded: state.posts.isLoaded,
        errorMessage: state.posts.errorMessage,
        lastPublicPosts: state.posts.lastPublicPosts,
    }
  }
   
export default withRouter(connect(mapStateToProps, null)(ListOfPosts));