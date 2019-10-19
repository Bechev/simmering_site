export function sign_in(email, password){
    return (dispatch) => {
        dispatch({ type: 'SIGNING_IN_USER' });    
        return fetch("http://localhost:3000/api/v1/auth/sign_in" ,{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => { 
            if(!response.ok){ 
                throw new Error(response.status)
            }
            else {
                const user = {};
                response.headers.forEach((value, name) => user[name] = value);
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({type:'SIGN_IN_USER_SUCCESS', payload: user })
            }
        })
        .catch(error =>{
            dispatch({type:'SIGN_IN_USER_FAILURE', payload: error, error:true})
        })
    }    
};

export function verify_credentials(user){
    return(dispatch=>{
        dispatch({type: "CREDENTIAL_VERIFICATION"})
        return fetch("http://localhost:3000/api/v1/auth/validate_token", {
            headers:{
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token']
            }
        })
        .then(response=>{
            if(!response.ok) throw new Error(response.status)
            else dispatch({type: "CREDENTIAL_VERIFICATION_SUCCESS", payload: user})
        })
        .catch(error=>{
            console.log(error)
            dispatch({type:'CREDENTIAL_VERIFICATION_FAILURE', payload: error, error:true})
        })
    })
}

export function sign_out(user){
    return(dispatch=>{
        dispatch({type: "SIGNING_OUT_USER", payload: user})
        return fetch("http://localhost:3000/api/v1/auth/sign_out", {
        method: 'DELETE',
        headers:{
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token']
            }
        })
        .then(response=>{
            if(!response.ok) throw new Error(response.status)
            else dispatch({type: "SIGN_OUT_USER_SUCCESS", payload: user})
        })
        .catch(error=>{
            console.log(error)
            dispatch({type:'SIGN_OUT_USER_FAILURE', payload: error, error:true})
        })
    })
}