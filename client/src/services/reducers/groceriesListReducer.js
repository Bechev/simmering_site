export default function groceriesListReducer(state = {
    isLoaded: false,
    errorMessage: '',
    ingredients: [],
    }, action) {

    switch (action.type) {
        case 'FETCH_GROCERIES_LIST':
            return  {
                    ...state,
                    isLoaded: false}
            
        case 'FETCH_GROCERIES_LIST_SUCCESS':
            return  {
                    ...state,
                    ingredients: [].concat(action.payload),
                    isLoaded: true,}

        case 'FETCH_GROCERIES_LIST_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}