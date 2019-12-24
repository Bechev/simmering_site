import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import Category from './BrowseCategory/Category.js'



class BrowseCategory extends Component {
    


    renderCategoriesList() {
        if(this.props.categories.length>0){
            return(
                this.props.categories.map((category) => {
                    return(
                        <React.Fragment>
                            <Category categoryTitle={category.name} recipes={category.recipes}/>
                        </React.Fragment>
                    )
                })
            )
        }else{
            return(
                <h1>
                    Loading
                </h1>
            )
        }
    }


  render() {

    return(
        <div className="browse_category">
            {this.renderCategoriesList()}
        </div>
        )   
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories.categoriesList,
        // user: state.auth.user
    }
  }

// const mapDispatchToProps = dispatch => {
//     return {
//         sign_out: (user) => dispatch(sign_out(user)),
//     }
// }

export default withRouter(connect(mapStateToProps, null)(BrowseCategory));