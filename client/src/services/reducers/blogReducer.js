export default function blogReducer(state = {
    isLoaded: false,
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
                       
        case 'POST_BLOG_COMMENT':
            return  {
                    ...state,
                    isLoaded: false}
    
        case 'POST_BLOG_COMMENT_SUCCESS':
            let new_blog_comments = state.blogPost.blog_comments.slice()
            new_blog_comments.splice(new_blog_comments.length,0,action.payload)
            return{
                ...state,
                blogPost: {
                    ...state.blogPost,
                    blog_comments: new_blog_comments
                },
                isLoaded: true,
            }

        case 'POST_BLOG_COMMENT_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        default:
            return state;
    }
}