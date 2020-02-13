import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import BlogPostComments from './BlogPostPresentation/BlogPostComments.js'


class BlogPostPresentation extends Component {

    renderBlogPost(){
        if(this.props.blogPost){
            return(
                <React.Fragment>
                    <h1 className="blog_post_title">{this.props.blogPost.title}</h1>
                    <div className="blog_post_summary">{this.props.blogPost.summary}</div>
                    <br></br>
                    <div className="blog_post_content">{this.props.blogPost.content}</div>
                </React.Fragment>
            )
        }
    }



    render() {
        return(
            <div className="blog_post">
                {this.renderBlogPost()}
                <BlogPostComments comments={this.props.blogPost.blog_comments}/>
            </div>
            )
        }

}


const mapStateToProps = (state) => {
    return {
        blogPost: state.blog.blogPost,
    }
  }
  
  export default withRouter(connect(mapStateToProps, null)(BlogPostPresentation));
