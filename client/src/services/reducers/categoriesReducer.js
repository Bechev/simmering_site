export default function categoriesReducer(state = {
    isLoaded: false,
    errorMessage: '',
    categoriesList: [],
    }, action) {

    switch (action.type) {
        case 'LOAD_CATEGORIES':
            return  {
                ...state,
                isLoaded: false}
        
        case 'LOAD_CATEGORIES_SUCCESS':
            return  {
                ...state,
                isLoaded: true,
                categoriesList: [].concat(action.payload)}

        case 'LOAD_CATEGORIES_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}