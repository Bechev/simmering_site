export function fetchLatestBlogPosts(){
    return (dispatch) => {
        dispatch({ type: 'LOAD_BLOG_POST'});    
        return fetch("http://localhost:3000/api/v1/blog_posts/",{
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
        })
        .then(response => response.json())
        .then(post => { 
            dispatch({type:'LOAD_BLOG_POST_SUCCESS', payload: post})
        })
        .catch(error =>{
            dispatch({type:'LOAD_BLOG_POST_FAILURE', payload: error, error:true})
        })
    }    
};

export function fetchBlogPost(post_slug){
    return (dispatch) => {
        dispatch({ type: 'LOAD_LATEST_POSTS' });    
        return fetch("http://localhost:3000/api/v1/blog_posts/" + post_slug ,{
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
        })
        .then(response => response.json())
        .then(post => { 
            dispatch({type:'LOAD_LATEST_POSTS_SUCCESS', payload: post})
        })
        .catch(error =>{
            dispatch({type:'LOAD_LATEST_POSTS_FAILURE', payload: error, error:true})
        })
    }    
};