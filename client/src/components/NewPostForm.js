import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './components.css';
import TextInput from './NewPostForm/TextInput.js';

class NewPostForm extends Component {

  render() {

    return(
        <div className="new_post_form">
            <TextInput/>
        </div>
        )
    }

}
  
export default withRouter(NewPostForm);