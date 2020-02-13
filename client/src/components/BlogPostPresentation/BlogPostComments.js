import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import BlogCommentInput from './BlogCommentInput'
import '../components.css'


class BlogPostComments extends Component {

    renderDate(dateString){
        let date = new Date(dateString)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let hours = date.getHours()
        let min = date.getMinutes()
        if (min < 10){
            min = "0" + min
        } 
        if (hours < 10){
            hours = "0" + hours
        } 
        return month + "/" + day + "/" + year + " at " + hours + ":" + min
    }

    renderBlogPostComments(){
        if(this.props.comments){
            return(
                this.props.comments.map((comment) =>{
                    return(
                        <div className='blog_post_comment'>
                            <div className="comment_author">{comment.user.username} wrote on {this.renderDate(comment.created_at)}:</div>
                            <div classname="blog_comment">{comment.content}</div>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        return(
            <div className="blog_post_comments">
                <BlogCommentInput/>
                {this.renderBlogPostComments()}
            </div>
            )
        }

}


const mapStateToProps = (state) => {
    return {
        blogPost: state.blog.blogPost,
    }
  }
  
  export default withRouter(connect(mapStateToProps, null)(BlogPostComments));
