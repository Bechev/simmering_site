import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ListOfPosts from '../../components/ListOfPosts.js'
import '../scenes.css';

class Wall extends Component {

  render() {

    return(
        <div className="wall">
            <ListOfPosts/>
        </div>
        )
    }

}
  
export default withRouter(Wall);