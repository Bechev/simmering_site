import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Carousel from '../Carousel';



class BrowseCatgegory extends Component {

  render() {

    return(
        <div className="category">
            <h1 className="category_title">
                {this.props.categoryTitle}
            </h1>
            <Carousel isCategory={true} recipes={this.props.recipes}/>
        </div>
        )   
    }

}
  
export default withRouter(BrowseCatgegory);