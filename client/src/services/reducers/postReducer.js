export default function postReducer(state = {
    isLoaded: false,
    errorMessage: '',
    post: {},
    }, action) {

    switch (action.type) {
        case 'LIKE_POST':
            return  {
                    ...state,
                    isLoaded: false}
            
        case 'LIKE_POST_SUCCESS':
        return  {
                ...state,
                isLoaded: true,
                post: action.payload}

        case 'LIKE_POST_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}