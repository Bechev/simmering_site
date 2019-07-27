import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {submit_new_post} from '../../../services/actions/post.js' 

import '../../components.css';

class TextInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            post_value:  '',
            character_remaining: 255,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        if(event.target.value.length <= 255){
            this.setState({
                [event.target.name]: event.target.value,
                character_remaining: 255 - event.target.value.length,
            });
        }else{
            alert("You're too chatty bro")
        }
    }

    handleSubmit(){
        let new_post = {message: this.state.post_value, likes: 0, reshare: 0}
        this.props.submit_new_post(new_post)
    }

    render() {
        return(
            <div className="post_input">
                <form onSubmit={this.handleSubmit}>
                    <label className='post_input_field'>
                        <textarea className='post_input_field' type="text" name="post_value" value={this.state.post_value} onChange={this.handleChange} placeholder="Share you meal plans here"/>
                    </label><br></br>
                    <input className='post_input_field_button button' type="submit" value="Post" />
                    <label className='char_counter'>Char remaining: {this.state.character_remaining}</label>
                </form>
            </div>
            )
        }

}
  

// const mapStateToProps = (state, ownProps) => {
//     return {
//     //   number_of_likes: state.post.likes,
//     //   isLoaded: state.isLoaded,
//     //   errorMessage: state.errorMessage,
//     }
//   }
   
  const mapDispatchToProps = dispatch => {
    return {
        submit_new_post: (post, history) => dispatch(submit_new_post(post, history))
    //   like_post: (postId, history) => dispatch(like_post(postId, history)),
    }
  }
  
export default withRouter(connect(null, mapDispatchToProps)(TextInput));
// export default withRouter(TextInput);