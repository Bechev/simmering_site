export default function blogReducer(state = {
    isLoaded: false,
    errorMessage: '',
    latestPosts: {},
    blogPost: {},
    }, action) {

    switch (action.type) {
        case 'LOAD_BLOG_POST':
            return  {
                ...state,
                isLoaded: false}
            
        case 'LOAD_BLOG_POST_SUCCESS':
            return  {
                ...state,
                isLoaded: true,
                blogPost: action.payload}

        case 'LOAD_BLOG_POST_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}
        
        case 'LOAD_LATEST_POSTS':
                return  {
                        ...state,
                        isLoaded: false}
                
        case 'LOAD_LATEST_POSTS_SUCCESS':
            return  {
                    ...state,
                    isLoaded: true,
                    latestPosts: action.payload}
    
        case 'LOAD_LATEST_POSTS_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}
        
        default:
            return state;
    }
}