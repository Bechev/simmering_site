export function displayPostComments(postId, history){
    
    return (dispatch) => {
        dispatch({ type: 'DISPLAY_COMMENTS', payload: postId });    
        // return dispatch({type:'GET_POST_COMMENTS_SUCCESS', payload: postId})
    }
}

export function hidePostComments(postId, history){
    
    return (dispatch) => {
        dispatch({ type: 'HIDE_COMMENTS', payload: postId });    
        // return dispatch({type:'GET_POST_COMMENTS_SUCCESS', payload: postId})
    }
}