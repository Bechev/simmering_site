import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import '../components.css'


class MyMealplans extends Component {

    // constructor(props){
    //     super(props);
        
    // }

    

    render() {

        return(
            <div className="my_mealplan">
                
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      mealplans: state.mealplans.userMealplans,
    }
  }

// const mapDispatchToProps = dispatch => {
//     return {
//         sign_out: (user) => dispatch(sign_out(user)),
//     }
// }

export default withRouter(connect(mapStateToProps, null)(MyMealplans));