import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Category from './BrowseCategory/Category.js'



class BrowseCategory extends Component {

  render() {

    return(
        <div className="browse_category">
            <Category/>
        </div>
        )   
    }

}
  
export default withRouter(BrowseCategory);