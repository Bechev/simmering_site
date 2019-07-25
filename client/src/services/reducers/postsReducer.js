export default function postsReducer(state = {
    isLoading: false,
    errorMessage: '',
    lastPublicPosts: [],
    lastUserPosts: [],
    allUserPosts: [],
    }, action) {

    switch (action.type) {
        case 'GET_LAST_PUBLIC_POSTS':
            return  {
                    ...state,
                    isLoading: true}
            
        case 'LOAD_LAST_PUBLIC_POSTS_SUCCESS':
        return  {
                ...state,
                isLoading: false,
                lastPublicPosts: [].concat(action.payload)}

        case 'LOAD_LAST_PUBLIC_POSTS_FAILURE':
            return{
                ...state,
                isLoading: false,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}