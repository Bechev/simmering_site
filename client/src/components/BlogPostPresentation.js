import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'


class BlogPostPresentation extends Component {

    renderBlogPost(){
        if(this.props.blogPost){
            return(
                <React.Fragment>
                    <h1>{this.props.blogPost.title}</h1>
                    {/* <h2>this.props.blogPost.summary</h2> */}
                    <div>{this.props.blogPost.content}</div>
                </React.Fragment>
            )
        }
    }

    render() {
        return(
            <React.Fragment>
                {this.renderBlogPost()}
            </React.Fragment>
            )
        }

}


const mapStateToProps = (state) => {
    return {
        blogPost: state.blog.blogPost,
    }
  }
  
  export default withRouter(connect(mapStateToProps, null)(BlogPostPresentation));
