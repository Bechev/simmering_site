import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetch_categories } from '../services/actions/categories.js'
import BrowseCategory from '../components/BrowseCategory.js'

class Browse extends Component {

    componentDidMount(){
        this.props.fetch_categories()
    }

  render() {

    return(
        <div className="browse">
            <BrowseCategory/>
        </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        fetch_categories: () => dispatch(fetch_categories()),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Browse));