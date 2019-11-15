export default function mealplansReducer(state = {
    isLoaded: false,
    errorMessage: '',
    userMealplans: [],
    }, action) {

    switch (action.type) {
        case 'GET_MEALPLANS':
            return  {
                    ...state,
                    isLoaded: false}
            
        case 'GET_MEALPLANS_SUCCESS':
            return  {
                    ...state,
                    isLoaded: true,
                    userMealplans: [].concat(action.payload)}

        case 'GET_MEALPLANS_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}