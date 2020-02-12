export function like_post(post_id,number_of_likes, history){
    return (dispatch) => {
        dispatch({ type: 'LIKE_POST' });    
        return fetch("http://localhost:3000/api/v1/posts/" + post_id ,{
            method: "PUT",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                id: post_id,
                likes: number_of_likes
            })
        })
        .then(response => response.json())
        .then(post => { 
            dispatch({type:'LIKE_POST_SUCCESS', payload: post})
        })
        .catch(error =>{
            dispatch({type:'LIKE_POST_FAILURE', payload: error, error:true})
        })
    }    
};

export function share_post(post_id, number_of_shares, history){
    return (dispatch) => {
        dispatch({ type: 'SHARE_POST' });    
        return fetch("http://localhost:3000/api/v1/posts/" + post_id ,{
            method: "PUT",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                id: post_id,
                reshare: number_of_shares
            })
        })
        .then(response => response.json())
        .then(post => { 
            dispatch({type:'SHARE_POST_SUCCESS', payload: post})
            window.location.reload()
        })
        .catch(error =>{
            dispatch({type:'SHARE_POST_FAILURE', payload: error, error:true})
        })
    }    
};


export function submit_new_post(post_message, history){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({ type: 'SUBMIT_NEW_POST' });    
        return fetch("http://localhost:3000/api/v1/posts/" ,{
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
                post_message: post_message
            })
        })
        .then(response => response.json())
        .then(post => { 
            dispatch({type:'SUBMIT_NEW_POST_SUCCESS', payload: post})
        })
        .catch(error =>{
            dispatch({type:'SUBMIT_NEW_POST_FAILURE', payload: error, error:true})
        })
    }    
};