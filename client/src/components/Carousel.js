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

    renderSecondRecipeCard(){

    }

    renderRecipeCards(){
        if(!this.props.recipes || this.props.recipes.length === 0){
            return(
                <h1>No suggestions at the time. We can't do better than you!</h1>
            )
        }
        else if(this.props.recipes.length ===1){
            return(
                <RecipeCard className='carouselItem' isMealPlan={false} recipe={this.props.recipes[this.state.currentDisplayedItemIndex]}/>
            )
        }else if(!this.props.isCategory){
            let indexSecondCard = this.state.currentDisplayedItemIndex === this.props.recipes.length -1 ? 0 : this.state.currentDisplayedItemIndex + 1
                return(
                    <React.Fragment>
                    <RecipeCard className='carouselItem' isMealPlan={false} recipe={this.props.recipes[this.state.currentDisplayedItemIndex]}/>
                    <RecipeCard className='carouselItem' isMealPlan={false} recipe={this.props.recipes[indexSecondCard]}/>
                </React.Fragment>
                )
        }else{
            let indexSecondCard = this.state.currentDisplayedItemIndex + 1
            let indexThirdCard = this.state.currentDisplayedItemIndex + 2
            let indexFourthCard = this.state.currentDisplayedItemIndex + 3
            if (this.state.currentDisplayedItemIndex === this.props.recipes.length - 1){
                indexSecondCard =  0
                indexThirdCard =  1
                indexFourthCard =  2
            }else if(this.state.currentDisplayedItemIndex === this.props.recipes.length - 2){
                indexSecondCard =  this.props.recipes.length - 1
                indexThirdCard =  0
                indexFourthCard =  1
            }else if(this.state.currentDisplayedItemIndex === this.props.recipes.length - 3){
                indexSecondCard =  this.props.recipes.length - 2
                indexThirdCard =  this.props.recipes.length - 1
                indexFourthCard =  0
            }
                return(
                    <React.Fragment>
                    <RecipeCard className='carouselItem' isMealPlan={false} recipe={this.props.recipes[this.state.currentDisplayedItemIndex]}/>
                    <RecipeCard className='carouselItem' isMealPlan={false} recipe={this.props.recipes[indexSecondCard]}/>
                    <RecipeCard className='carouselItem' isMealPlan={false} recipe={this.props.recipes[indexThirdCard]}/>
                    <RecipeCard className='carouselItem' isMealPlan={false} recipe={this.props.recipes[indexFourthCard]}/>
                </React.Fragment>
                )
        }
    }

    render () {
        if(this.props.recipes){
            return (
                <div className="carousel">
        
                    <Arrow
                        direction="carouselleft"
                        clickFunction={ this.previousSlide }
                        glyph="&#9664;" />

                        {this.renderRecipeCards()}

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