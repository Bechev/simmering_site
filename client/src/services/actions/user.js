export function fetchUserParameters(user){
    return (dispatch) => {
        dispatch({ type: 'GET_USER_PARAMETERS' });    
        return fetch("http://localhost:3000/api/v1/parameters/",{
            headers:{
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token'],
                "Access-Control-Allow-Origin": "*",
            }
        })
        .then(response => response.json())
        .then(parameters => {
            dispatch({type:'GET_USER_PARAMETERS_SUCCESS', payload: parameters})
        })
        .catch(error =>{
            dispatch({type:'GET_USER_PARAMETERS_FAILURE', payload: error, error:true})
        })
    }    
};

export function updateUserParameters(user, parameter_id, settings){
    return (dispatch) => {
        dispatch({ type: 'UPDATE_USER_PARAMETERS' });    
        return fetch("http://localhost:3000/api/v1/parameters/" + parameter_id,{
            method: "PUT",
            cache: "no-cache",
            credentials: "same-origin",    
            headers:{
                    "uid": user.uid,
                    "client":  user.client,
                    "access-token":  user['access-token'],
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    settings: settings,
                })
        })
        .then(response => response.json())
        .then(parameters => {
            dispatch({type:'UPDATE_USER_PARAMETERS_SUCCESS', payload: parameters})
        })
        .catch(error =>{
            dispatch({type:'UPDATE_USER_PARAMETERS_FAILURE', payload: error, error:true})
        })
    }    
};

