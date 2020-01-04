import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {sign_out } from '../services/actions/auth.js'
import './components.css'


class ProfileInformation extends Component {

    // constructor(props){
    //     super(props);
        
    // }

    
    sign_out(){
        this.props.sign_out(this.state.user)
        window.location.reload()
    }

    render() {

        return(
            <div className="profile_information" >
                {this.props.informations}
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        sign_out: (user) => dispatch(sign_out(user)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileInformation));