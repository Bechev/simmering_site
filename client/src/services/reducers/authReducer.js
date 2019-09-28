export default function authReducer(state = {
    isLoaded: false,
}, action) {

    switch (action.type) {
        case 'LOGGING_USER_IN':
            return  {
                ...state,
                // test: action.payload
            }
            
        case 'LOGGING_USER_IN_SUCCESS':
            return  {
                // ...state,
                isLoaded: true,
                user: action.payload}

        case 'LOGGING_USER_IN_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}
        
        default:
            return state;
    }
}