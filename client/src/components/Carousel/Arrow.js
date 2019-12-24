import React, { Component } from 'react';
import '../components.css'
import LeftArrow from '../../assets/green-left-arrow-icon.png'
import RightArrow from '../../assets/green-right-arrow-icon.png'

// const Arrow = ({ direction, clickFunction, glyph }) => (
//     <div
//       className={ `slide-arrow ${direction}` }
//       onClick={ clickFunction }>
//       { glyph }
//     </div>
//   );


class Arrow extends Component {
    
    renderArrow(){
        if(this.props.direction === "carouselLeft"){
            return(
                <img src={LeftArrow} className="arrow_icon" alt='left_arrow_button'></img>
            )
        }else{
            return(
                <img src={RightArrow} className="arrow_icon" alt='right_arrow_button'></img>
            )
        }
        
    }
    render(){
        return(
            <div
            className="arrow_icon"
            onClick={ this.props.clickFunction }>
            {this.renderArrow()}
            </div>
        )
    }
}

  export default Arrow