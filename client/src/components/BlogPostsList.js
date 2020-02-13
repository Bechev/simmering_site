import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux'
import './components.css';


class BlogPostsList extends Component {
    
    renderBlogPostList(){
        if(this.props.latestPosts[0]){
            return(
                this.props.latestPosts.map((post) => {
                    console.log(post)
                    return(
                        <React.Fragment>
                            <Link className="blog_post_information blog_post_link" to={`/blog/${post.slug}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <div className="blog_post_information">{post.summary}</div>
                            <br></br>
                        </React.Fragment>
                    )
                })
            )
        }
    }

    render() {

        return(
            <div className="blog_posts_list">
                {this.renderBlogPostList()}
            </div>
            )
        }

}


const mapStateToProps = (state) => {
    return {
        latestPosts: state.blog.latestPosts,
    }
  }
  
export default withRouter(connect(mapStateToProps, null)(BlogPostsList));
