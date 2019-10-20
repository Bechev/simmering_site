import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { submit_new_post } from '../../../services/actions/post.js' 
import { submit_new_comment } from '../../../services/actions/comment.js' 

import '../../components.css';

class TextInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            post_value:  '',
            character_remaining: 255,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
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

    handlePostSubmit(){
        this.props.submit_new_post(this.state.post_value, this.props.user)
    }

    handleCommentSubmit(){
        this.props.submit_new_comment(this.state.post_value, this.props.post_id, this.props.user)
    }

    renderTextInput(){
        if(this.props.isComment===false){
            return(
                <form onSubmit={this.handlePostSubmit}>
                    <label className='post_input_field'>
                        <textarea className='post_input_field' type="text" name="post_value" value={this.state.post_value} onChange={this.handleChange} placeholder="Share you meal plans here"/>
                    </label><br></br>
                    <input className='post_input_field_button button' type="submit" value="Post" />
                    <label className='char_counter'>Char remaining: {this.state.character_remaining}</label>
                </form>
            )
        }else{
            return(
                <form onSubmit={this.handleCommentSubmit}>
                    <label className='post_input_field'>
                        <textarea className='post_input_field' type="text" name="post_value" value={this.state.post_value} onChange={this.handleChange} placeholder="Any comments?"/>
                    </label><br></br>
                    <input className='comment_input_field_button button' type="submit" value="Post" />
                    <label className='char_counter'>Char remaining: {this.state.character_remaining}</label>
                </form>
            )
        }
    }

    render() {
        return(
            <div className="post_input">
                {this.renderTextInput()}
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        submit_new_post: (post_message, history) => dispatch(submit_new_post(post_message, history)),
        submit_new_comment: (comment_message, post_id, history) => dispatch(submit_new_comment(comment_message, post_id, history))
    }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TextInput));
// export default withRouter(TextInput);