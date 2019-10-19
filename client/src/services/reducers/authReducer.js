export default function authReducer(state = {
    isLoaded: false,
}, action) {

    switch (action.type) {
        
        // User login actions
        case 'SIGNING_IN_USER':
            return  {
                ...state,
            }

        case 'SIGN_IN_USER_SUCCESS':
            return  {
                isLoaded: true,
                user: action.payload}

        case 'SIGN_IN_USER_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        // Credential verification actions
        case 'CREDENTIAL_VERIFICATION':
            return  {
                ...state,
            }
        
        case 'CREDENTIAL_VERIFICATION_SUCCESS':
            return  {
                isLoaded: true,
                user: action.payload}                

        case 'CREDENTIAL_VERIFICATION_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}
        
        // Logout actions
        case 'SIGNING_OUT_USER':
            return  {
                ...state,
            }
        
        case 'SIGN_OUT_USER_SUCCESS':
            return  {
                isLoaded: true,
                user: action.payload}                

        case 'SIGN_OUT_USER_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}
        
        default:
            return state;
    }
}