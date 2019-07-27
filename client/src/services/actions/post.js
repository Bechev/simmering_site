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