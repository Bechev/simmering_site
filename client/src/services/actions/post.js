export function like_post(post_id, history){
    return (dispatch) => {
        dispatch({ type: 'LIKE_POST' });    
        return fetch("http://localhost:3000/api/v1/posts/" + post_id + "/like_post",{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: post_id,
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