export function sign_in(email, password){
    return (dispatch) => {
        dispatch({ type: 'LOGGING_USER_IN' });    
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
                dispatch({type:'LOGGING_USER_IN_SUCCESS', payload: user })
            }
        })
        .catch(error =>{
            alert(error)
            dispatch({type:'LOGGING_USER_IN_FAILURE', payload: error, error:true})
        })
    }    
};

export function verify_credentials(user){
    return(dispatch=>{
        dispatch({type: "REFRESH_USER", payload: user})
        return fetch("http://localhost:3000/api/v1/auth/validate_token", {
            headers:{
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token']
            }
        })
        .then(response=>{
            if(!response.ok) throw new Error(response.status)
            else this.props.refresh_user(user)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}