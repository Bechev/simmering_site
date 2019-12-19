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
                    userMealplans: [].concat(action.payload),
                    isLoaded: true,}

        case 'GET_MEALPLANS_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}