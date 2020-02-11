import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {fetchBlogPost } from '../services/actions/blog.js'
import { connect } from 'react-redux'
import BlogPostPresentation from '../components/BlogPostPresentation.js'


class BlogPost extends Component {
    
    componentDidMount(){
        this.props.fetchBlogPost(this.props.match.params.slug)
    }
    render() {

        return(
            <div className="blog_homepage">
                <BlogPostPresentation/>
            </div>
            )
        }

}


// const mapStateToProps = (state) => {
//     return {
//       latestBlogPosts: state.latestPosts,
//     }
//   }
   
  const mapDispatchToProps = dispatch => {
    return {
        fetchBlogPost: (slug) => dispatch(fetchBlogPost(slug)),
    }
  }
  
  export default withRouter(connect(null, mapDispatchToProps)(BlogPost));
