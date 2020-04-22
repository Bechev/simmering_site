import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ListOfPosts from '../../components/ListOfPosts.js'
import '../scenes.css';

class Wall extends Component {


    // componentDidMount(){
        // console.log('//////////////////////////////(/////////////////////')
        // console.log(process.env.REACT_APP_API_URL)
        // console.log('///////////////////////////////////////////////////')

    // }
  render() {

    return(
        <div className="wall">
            <ListOfPosts/>
        </div>
        )
    }

}
  
export default withRouter(Wall);