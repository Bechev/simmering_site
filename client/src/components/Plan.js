import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Day from './Plan/Day.js'
import Suggestions from './Plan/Suggestions.js'
import './components.css'


class Plan extends Component {

  render() {

    return(
        <div className="plan">
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Suggestions/>

        </div>
        )
    }

}
  
export default withRouter(Plan);