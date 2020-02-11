import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {fetchLatestBlogPosts } from '../services/actions/blog.js'
import { connect } from 'react-redux'


class Home extends Component {
    
    componentDidMount(){
        this.props.fetchLatestBlogPosts()
    }
    render() {

        return(
            <div className="blog_homepage">
                {/* <BlogPostList/> */}
                Blog
            </div>
            )
        }

}


const mapStateToProps = (state) => {
    return {
      latestBlogPosts: state.latestPosts,
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
        fetchLatestBlogPosts: () => dispatch(fetchLatestBlogPosts()),
    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
