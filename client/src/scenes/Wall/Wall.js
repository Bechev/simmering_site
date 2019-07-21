import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import NewPostForm from '../../components/NewPostForm.js'
import '../scenes.css';

class Wall extends Component {

  render() {

    return(
        <div className="wall">
            <NewPostForm/>
        </div>
        )
    }

}
  
export default withRouter(Wall);