export function fetchLatestBlogPosts(){
    return (dispatch) => {
        dispatch({ type: 'LOAD_LATEST_POSTS'});    
        return fetch("https://simmering.herokuapp.com/blog_posts/",{
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

export function fetchBlogPost(post_slug){
    return (dispatch) => {
        dispatch({ type: 'LOAD_BLOG_POST' });    
        return fetch("https://simmering.herokuapp.com/blog_posts/" + post_slug ,{
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

export function postComment(post_id, user_id, content){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({ type: 'POST_BLOG_COMMENT' });    
        return fetch("https://simmering.herokuapp.com/blog_comments/" ,{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token']
            },
            body: JSON.stringify({
                content: content,
                post_id: post_id,
                user_id: user_id 
            })
        })
        .then(response => response.json())
        .then(post => { 
            console.log(post)
            dispatch({type:'POST_BLOG_COMMENT_SUCCESS', payload: post})
        })
        .catch(error =>{
            dispatch({type:'POST_BLOG_COMMENT_FAILURE', payload: error, error:true})
        })
    }    
};