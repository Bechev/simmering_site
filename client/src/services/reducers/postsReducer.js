export default function postsReducer(state = {
    isLoaded: false,
    errorMessage: '',
    lastPublicPosts: [],
    lastUserPosts: [],
    allUserPosts: [],
    }, action) {

    switch (action.type) {
        case 'GET_LAST_PUBLIC_POSTS':
            return  {
                    ...state,
                    isLoaded: false}
            
        case 'LOAD_LAST_PUBLIC_POSTS_SUCCESS':
        return  {
                ...state,
                isLoaded: true,
                lastPublicPosts: [].concat(action.payload)}

        case 'LOAD_LAST_PUBLIC_POSTS_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}