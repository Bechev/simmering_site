export function fetch_latest_post(post_id,number_of_likes, history){
    return (dispatch) => {
        dispatch({ type: 'LOAD_BLOG_POST'});    
        return fetch("http://localhost:3000/api/v1/blog_post/",{
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                slug: post_slug,
            })
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

export function share_post(post_id, number_of_shares, history){
    return (dispatch) => {
        dispatch({ type: 'LOAD_LATEST_POSTS' });    
        return fetch("http://localhost:3000/api/v1/blog_post/" + post_slug ,{
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                slug: post_slug,
            })
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