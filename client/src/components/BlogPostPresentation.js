import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'


class BlogPostPresentation extends Component {

    renderBlogPost(){
        if(this.props.blogPost){
            return(
                <React.Fragment>
                    <h1 className="blog_post_title">{this.props.blogPost.title}</h1>
                    <div className="blog_post_summary">This is a summary</div>
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
