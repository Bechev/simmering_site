import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetch_categories } from '../services/actions/categories.js'
import {fetchUserParameters } from '../services/actions/user.js'
import BrowseCategory from '../components/BrowseCategory.js'

class Browse extends Component {

    componentDidMount(){
        this.props.fetch_categories()
        if(this.props.userParameters.isLoaded ===  false){
            this.props.fetchUserParameters(this.props.user)
        }        
    }

  render() {

    return(
        <div className="browse">
            <BrowseCategory/>
        </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.user,
        userParameters: state.userParameters,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        fetch_categories: () => dispatch(fetch_categories()),
        fetchUserParameters: (user) => dispatch(fetchUserParameters(user)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Browse));