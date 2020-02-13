import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {postComment} from '../../services/actions/blog.js'
import '../components.css';


class BlogPostsList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            comment_value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            comment_value: event.target.value,
        });
        
    
    }

    handleSubmit(event){
        console.log(this.state.comment_value)
        event.preventDefault()
        this.props.postComment(this.props.blogPost.id, this.props.user.id, this.state.comment_value)
    }

    render() {
        return(
            <label className='blog_post_comment_input'>
                <textarea 
                    className='input_field blog_post_comment_input_field' 
                    type="text" 
                    name="comment_value" 
                    value={this.state.comment_value} 
                    onChange={this.handleChange} 
                    placeholder="Comments" />
                <button 
                    className="button post_blog_comment_button" 
                    onClick={this.handleSubmit} 
                    value="post">
                        Post
                </button>
            </label>
            )
        }

}


const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        blogPost: state.blog.blogPost,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        postComment: (post_id, user_id, content) => dispatch(postComment(post_id, user_id, content)),
    }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogPostsList));
