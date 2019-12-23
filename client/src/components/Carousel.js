import React, { Component } from 'react';
import RecipeCard from './RecipeCard.js'
import Arrow from './Carousel/Arrow.js'
import './components.css'

class Carousel extends Component {
    constructor(props){
        super(props)
        this.state= {
            currentDisplayedItemIndex: 0
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = this.props.recipes.length - 1;
        const { currentDisplayedItemIndex } = this.state;
        const shouldResetIndex = currentDisplayedItemIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentDisplayedItemIndex - 1;
    
        this.setState({
            currentDisplayedItemIndex: index
        });
    }

    nextSlide () {
        const lastIndex = this.props.recipes.length - 1;
        const { currentDisplayedItemIndex } = this.state;
        const shouldResetIndex = currentDisplayedItemIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentDisplayedItemIndex + 1;
    
        this.setState({
            currentDisplayedItemIndex: index
        });
    }

    render () {
        if(this.props.recipes){
            return (
                <div className="carousel">
        
                    <Arrow
                        direction="carouselleft"
                        clickFunction={ this.previousSlide }
                        glyph="&#9664;" />
                    
                    <RecipeCard className='carouselItem' isMealPlan={false} recipe={this.props.recipes[this.state.currentDisplayedItemIndex]}/>
                    <RecipeCard className='carouselItem' isMealPlan={false} recipe={this.props.recipes[this.state.currentDisplayedItemIndex + 1]}/>
                    
                    <Arrow
                        direction="carouselright"
                        clickFunction={ this.nextSlide }
                        glyph="&#9654;" />
        
                </div>
            );
        }else{
            return(
                <div>loading</div>
            )
        }
    }
  }

export default Carousel