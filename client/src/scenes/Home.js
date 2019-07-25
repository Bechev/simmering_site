import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {fetchLastPublicPosts } from '../services/actions/posts.js'
import { connect } from 'react-redux'

import Wall from './Home/Wall.js'

class Home extends Component {

componentDidMount(){
    this.props.fetchLastPublicPosts()
}

  render() {

    return(
        <div className="home">
            <Wall/>
        </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
      lastPublicPosts: state.lastPublicPosts,
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
        fetchLastPublicPosts: (posts, history) => dispatch(fetchLastPublicPosts(posts, history)),
    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
