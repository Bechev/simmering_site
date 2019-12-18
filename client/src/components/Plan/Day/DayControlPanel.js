import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Delete from '../../../assets/delete-icon.png'
import Edit from '../../../assets/edit-icon.png'
import Stopwatch from '../../../assets/stopwatch-icon.png'
import Calories from '../../../assets/calories-icon.png'
import '../../components.css';

class DayControlPanel extends Component {

    handleEditClick(){
        alert("That's some big fat edit")
    }


    handleDeleteClick(){
        alert("That's some big fat delete")
    }

  render() {

    return(
        <div className="day_control_panel">
            {/* <div className="controls">
                <div className="edit_recipe">
                    <img  src={Edit} className="edit icon" alt='edit_button' onClick={this.handleEditClick}></img>
                </div>
                <div className="remove_recipe">
                    <img src={Delete} className="delete icon" alt='delete_button' onClick={this.handleDeleteClick}></img>
                </div>
            </div> */}
            <div className="day_data">
                <div className="cooking_time recipe_card_information_element">
                    <img src={Stopwatch} className="stopwatch icon" alt='stopwatch_icon'></img>
                        10
                </div>
                <div className="calories_count recipe_card_information_element">
                    <img src={Calories} className="calories icon" alt='calories_icon'></img>
                        310
                </div>
            </div>

        </div>
        )
    }

}
  
export default withRouter(DayControlPanel);