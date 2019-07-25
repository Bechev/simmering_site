import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import NewPostForm from '../../components/NewPostForm.js'
import Post from '../../components/Post.js'
import '../scenes.css';

class Wall extends Component {

  render() {

    return(
        <div className="wall">
            <NewPostForm/>
            <Post isComment={false}/>
            <Post isComment={false}/>
            <Post isComment={true}/>
            <Post isComment={true}/>
            <Post isComment={false}/>
            <Post isComment={true}/>
        </div>
        )
    }

}
  
export default withRouter(Wall);