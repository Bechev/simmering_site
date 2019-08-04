export default function commentReducer(state = {
    isLoaded: false,
    errorMessage: '',
    comment: {},
    }, action) {

    switch (action.type) {
        case 'LIKE_COMMENT':
            return  {
                ...state,
                isLoaded: false}
            
        case 'LIKE_COMMENT_SUCCESS':
            return  {
                ...state,
                isLoaded: true,
                comment: action.payload}

        case 'LIKE_COMMENT_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}
        
        case 'SUBMIT_NEW_COMMENT':
            return  {
                    ...state,
                    isLoaded: false}
                
        case 'SUBMIT_NEW_COMMENT_SUCCESS':
            return  {
                    ...state,
                    isLoaded: true,
                    comment: action.payload}
    
        case 'SUBMIT_NEW_COMMENT_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}
        default:
            return state;
    }
}