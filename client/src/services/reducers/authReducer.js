export default function authReducer(state = {
    isLoaded: false,
}, action) {

    switch (action.type) {
        case 'LOGGING_USER_IN':
            return  {
                ...state,
            }

        case 'LOGGING_USER_IN_SUCCESS':
            return  {
                isLoaded: true,
                user: action.payload}

        case 'LOGGING_USER_IN_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}
        
        case 'REFRESH_USER':
            return  {
                isLoaded: true,
                user: action.payload}        

        default:
            return state;
    }
}