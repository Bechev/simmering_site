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
        lastPublicPosts: this.props.lastPublicPosts
    }
}

componentDidUpdate(prevProps){
    if (this.props.lastPublicPosts !== prevProps.lastPublicPosts){
        this.setState ({
            isLoaded: this.props.isLoaded,
            lastPublicPosts: this.props.lastPublicPosts
        })
    }

}

renderListOfPosts(){
    if(!this.state.isLoaded){
        return(
            <div>
                "Loading"
            </div>
        )
    }else{
        return(
            this.state.lastPublicPosts.map((post, id)=>{
                return(
                    <Post key={id} post={post}/>
                )
            })
        )
    }
}

  render() {
    return(
        <div className="list_of_posts">
            <NewPostForm/>
            {this.renderListOfPosts()}
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isLoaded: state.posts.isLoaded,
        lastPublicPosts: state.posts.lastPublicPosts,
    }
  }
   
export default withRouter(connect(mapStateToProps, null)(ListOfPosts));