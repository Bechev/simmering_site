export default function mealplanReducer(state = {
    isLoaded: false,
    errorMessage: '',
    id: null,
    name: "",
    days: []
}, action) {

    switch (action.type) {
        case 'GET_MEALPLAN':
            return {
                ...state,
                isLoaded: false
            }

        case 'GET_MEALPLAN_SUCCESS':
            return {
                ...state,
                isLoaded: true,
                id: action.payload.id,
                name: action.payload.name,
                days: [].concat(action.payload.days)
            }

        case 'GET_MEALPLAN_FAILURE':
            return {
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message
            }

        case 'REMOVE_RECIPE_FROM_MEAL':
            return {
                ...state,
            }

        case 'REMOVE_RECIPE_TO_MEAL_SUCCESS':

                state.days.map((day, day_index) => {
                    if (day.id === action.payload.day.id) {
                        if (action.payload.level === "day") {
                            state.days.splice(day_index, 1)
                        } else {
                            day.meals.map((meal, meal_index) => {
                                if (meal.id === action.payload.meal.id) {
                                    if(action.payload.level === "meal"){
                                        day.meals.splice(meal_index, 1)
                                    }else{
                                        meal.recipes.map((recipe, recipe_index)=>{
                                            if(recipe.id === action.payload.recipe.id){
                                                meal.recipes.splice(recipe_index ,1)
                                            }
                                        })
                                    }
                                } 
                            })
                        }
                    } 
                })
   

        // return {
        //     ...state,
        //     days: {
        //         ...state.days,
        //         meals: {
        //             ...state.days.meals,
        //             recipes: state.days.meals.recipes.filter(function (recipe) {
        //                 return recipe.id !== action.payload.recipe.id
        //             })
        //         }
        //     }
        // }
        // Is this shit immutable?! It's working for now though...
        // return state.days.forEach( day => {
        //     day.meals.forEach((meal, index_meal) => {
        //         if (action.payload === null ){
        //             // delete the meal if no more recipes
        //             day.meals.splice(index_meal, 1)
        //         }else if (meal.id === action.payload.id){
        //             // replace previous meal by the one returned by the backend
        //             day.meals.splice(index_meal, 1, action.payload)
        //         }
        //     });
        // })

        // let newDaysArray = state.days.slice()
        // newDaysArray.forEach( day => {
        //     let newMealsArray = day.meals
        //     newMealsArray.forEach((meal, index_meal) => {
        //         if (action.payload === null ){
        //             // delete the meal is no more recipes
        //             newMealsArray.splice(index_meal, 1)
        //         }else if (meal.id === action.payload.id){
        //             // replace previous meal by the one returned by the backend
        //             newMealsArray.splice(index_meal, 1, action.payload)
        //         }
        //     });
        // })
        // console.log("newDaysArray: " + newDaysArray)
        // return{
        //     ...state,
        //     days: newDaysArray
        // }

        case 'ADD_RECIPE_TO_MEAL_SUCCESS':
            // console.log("action.payload.day " + action.payload.day) 
            // console.log("action.payload.day.meal " + action.payload.day.meal)
            // console.log("action.payload.day.meal.recipe " + action.payload.day.meal.recipe)
        // ...state
        // Create a copy of the days array to ensure immutability
        // let newDaysArray = state.days
        // // Check if the day already exists or not
        // if (newDaysArray.some(e => e.id === action.payload.id)) {
        //     // If day exists, we replace it
        //     newDaysArray.forEach((day, day_index) => {
        //         if (day.id === action.payload.id) {
        //             state.days.splice(day_index, 1, action.payload)
        //         }
        //     })
        //     return {
        //         ...state,
        //         days: newDaysArray
        //     }
        // } else {
        //     // If the day doesn't exist, we add it
        //     return {
        //         ...state,
        //         days: [...newDaysArray, action.payload]
        //     }
        // }

        case 'ADD_OR_REMOVE_RECIPE_TO_MEAL_FAILURE':
            return {
                ...state,
                errorMessage: action.payload.message
            }

        // case 'ADD_RECIPE_TO_MEAL':
        //     return {
        //         ...state,
        //     }


        default:
            return state;
    }
}