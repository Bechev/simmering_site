import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {like_post} from '../../../../services/actions/post.js'
import Like from '../../../../assets/control_panel_buttons/Like_button_30x30.png'
import '../../../components.css';

class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: this.props.isLoaded,
            numberOfLikes: this.props.numberOfLikes,
            errorMessage: this.props.errorMessage,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            numberOfLikes: this.state.numberOfLikes + 1
        })
        this.props.like_post(this.props.postId, this.state.numberOfLikes)
    }
    
    renderNumberOfLikes(){
        return(
            <div className="post_social_counter">{this.state.numberOfLikes}</div>
        )
    }

    render() {
        if(this.props.errorMessage){
            alert(this.props.errorMessage + "Could not like post")
        }
        return(
            <div className="like_button control_panel_button" onClick={this.handleClick}>
                <img src={Like} 
                alt='like_button'>
                </img>
                <div className="post_social_counter">{this.state.numberOfLikes}</div>
            </div>
        )
    }

}
  

const mapStateToProps = (state, ownProps) => {
    return {
      number_of_likes: state.post.likes,
      isLoaded: state.isLoaded,
      errorMessage: state.errorMessage,
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      like_post: (postId, history) => dispatch(like_post(postId, history)),
    }
  }
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeButton));