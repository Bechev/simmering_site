import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import GroceriesList from '../components/GroceriesList.js'

class Cart extends Component {

  render() {

    return(
        <div className="cart">
            <GroceriesList/>
        </div>
        )
    }

}
  
export default withRouter(Cart);