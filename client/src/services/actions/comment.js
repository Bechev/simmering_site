export function submit_new_comment(comment_message, post_id, history){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({ type: 'SUBMIT_NEW_COMMENT' });    
        return fetch("https://simmering.herokuapp.com/api/v1/posts/"+post_id+"/comments" ,{
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
                comment:{
                    post_id: post_id,
                    message: comment_message
                }
            })
        })
        .then(response => response.json())
        .then(post => { 
            dispatch({type:'SUBMIT_NEW_COMMENT_SUCCESS', payload: post})
        })
        .catch(error =>{
            dispatch({type:'SUBMIT_NEW_COMMENT_FAILURE', payload: error, error:true})
        })
    }    
};


// export function like_post(post_id,number_of_likes, history){
//     return (dispatch) => {
//         dispatch({ type: 'LIKE_POST' });    
//         return fetch("http://localhost:3000/api/v1/posts/" + post_id ,{
//             method: "PUT",
//             cache: "no-cache",
//             credentials: "same-origin",
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8"
//             },
//             body: JSON.stringify({
//                 id: post_id,
//                 likes: number_of_likes
//             })
//         })
//         .then(response => response.json())
//         .then(post => { 
//             dispatch({type:'LIKE_POST_SUCCESS', payload: post})
//         })
//         .catch(error =>{
//             dispatch({type:'LIKE_POST_FAILURE', payload: error, error:true})
//         })
//     }    
// };
