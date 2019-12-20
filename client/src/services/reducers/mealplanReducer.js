export default function mealplanReducer(state = {
    isLoaded: false,
    errorMessage: '',
    id: null,
    name: "",
    days: []
    }, action) {

    switch (action.type) {
        case 'GET_MEALPLAN':
            return  {
                    ...state,
                    isLoaded: false}
            
        case 'GET_MEALPLAN_SUCCESS':
            return  {
                    ...state,
                    isLoaded: true,
                    id: action.payload.id,
                    name: action.payload.name,
                    days: [].concat(action.payload.days)}

        case 'GET_MEALPLAN_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        case 'REMOVE_RECIPE_FROM_MEAL':
            return  {
                    ...state,
                }
            
        case 'REMOVE_RECIPE_FROM_MEAL_SUCCESS':
            return state.days.forEach( day => {
                day.meals.forEach((meal, index_meal) => {
                    if (action.payload === null ){
                        // delete the meal is no more recipes
                        day.meals.splice(index_meal, 1)
                    }else if (meal.id === action.payload.id){
                        // replace previous meal by the one returned by the backend
                        day.meals.splice(index_meal, 1, action.payload)
                    }
                });
            })

        case 'REMOVE_RECIPE_FROM_MEAL_FAILURE':
            return{
                ...state,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}