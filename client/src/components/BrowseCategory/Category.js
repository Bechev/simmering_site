import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Carousel from '../Carousel';



class BrowseCatgegory extends Component {

  render() {

    return(
        <div className="category">
            <h1>
                Category Title
            </h1>
            <Carousel isCategory={true} 
                      recipes={[{id: 1, name: "test", calories: 1, total_recipe_time: 1}, 
                                {id: 2, name: "test2", calories: 2, total_recipe_time: 2}, 
                                {id: 3, name: "test3", calories: 3, total_recipe_time: 3},
                                {id: 4, name: "test4", calories: 4, total_recipe_time: 4}, 
                                {id: 5, name: "test5", calories: 5, total_recipe_time: 5}, 
                                {id: 6, name: "test6", calories: 6, total_recipe_time: 6},
                                {id: 7, name: "test7", calories: 7, total_recipe_time: 7}, 
                                {id: 8, name: "test8", calories: 8, total_recipe_time: 8}, 
                                {id: 9, name: "test9", calories: 9, total_recipe_time: 9},
                                {id: 10, name: "test10", calories: 10, total_recipe_time: 10}, 
                                {id: 11, name: "test11", calories: 11, total_recipe_time: 11}, 
                                {id: 12, name: "test12", calories: 12, total_recipe_time: 12},
                                {id: 13, name: "test13", calories: 13, total_recipe_time: 13}, 
                                {id: 14, name: "test14", calories: 14, total_recipe_time: 14}, 
                                {id: 15, name: "test15", calories: 15, total_recipe_time: 15}]}/>
        </div>
        )   
    }

}
  
export default withRouter(BrowseCatgegory);