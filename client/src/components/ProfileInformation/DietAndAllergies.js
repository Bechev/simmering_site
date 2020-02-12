import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import {updateUserParameters } from '../../services/actions/user.js'
import '../components.css'


class DietAndAllergies extends Component {


    renderLabel(dietary_item){
        switch (dietary_item){
            case 'is_gluten_free':
                return 'Gluten Free'
            case 'is_vegetarian':
                return 'Vegetarian'
            case 'is_vegan':
                return 'Vegan'
            case 'shellfish_allergic':
                return 'Allergic to shellfish'
            case 'nuts_allergic':
                return 'Allergic to nuts'
            case 'lactose_intolerant':
                return 'Lactose intolerant'
            default:
                return 'Error'
        }
    }

    handleChange(dietary_item) {
        console.log(dietary_item)
        var key = dietary_item;
        var updatedUserParameters = {};
        updatedUserParameters[key] = !this.props.dietAndAllergies[dietary_item];
        this.props.updateUserParameters(this.props.userParameters.id, updatedUserParameters);
    }

    renderDietAndAllergiesCheckBoxes() {
        if(this.props.userParameters.isLoaded === false){
            return(
                <div>Loading</div>
            )
        }else{
            return(
                Object.keys(this.props.dietAndAllergies).map((dietary_item, dietary_item_value)=>{
                    return(
                        <div className="dietary_item">
                            <input className="checkbox" type="checkbox"
                            onClick={() => this.handleChange(dietary_item)} 
                            name={dietary_item} value={dietary_item_value}
                            checked={this.props.dietAndAllergies[dietary_item] ?  true : false}>
                            </input>
                            <label className="ingredient_label">
                                {this.renderLabel(dietary_item)}
                            </label>
                            <br></br>
                        </div>
                    )
                })
            )
        }
    }    

    render() {

        return(
            <div className="diet_and_allergies">
                {this.renderDietAndAllergiesCheckBoxes()}
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user,
      userParameters: state.userParameters,
      dietAndAllergies: state.userParameters.dietAndAllergies,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        updateUserParameters: (params_id, params) => dispatch(updateUserParameters(params_id, params)),
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         sign_out: (user) => dispatch(sign_out(user)),
//     }
// }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DietAndAllergies));