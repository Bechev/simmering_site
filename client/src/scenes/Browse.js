import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import BrowseCategory from '../components/BrowseCategory.js'

class Browse extends Component {

  render() {

    return(
        <div className="browse">
            <BrowseCategory/>
        </div>
        )
    }

}
  
export default withRouter(Browse);