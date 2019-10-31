import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Day from './Plan/Day.js'
import './components.css'


class Plan extends Component {

  render() {

    return(
        <div className="plan">
            <Day/>
            <Day/>
            <Day/>
            <Day/>

        </div>
        )
    }

}
  
export default withRouter(Plan);