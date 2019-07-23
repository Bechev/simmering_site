import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Cart extends Component {

  render() {

    return(
        <div className="cart">
            Cart
        </div>
        )
    }

}
  
export default withRouter(Cart);