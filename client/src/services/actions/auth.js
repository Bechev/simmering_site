export function sign_in(email, password, history){
    return (dispatch) => {
        dispatch({ type: 'LOGGING_USER_IN' });    
        return fetch("http://localhost:3000/api/v1/auth/sign_in" ,{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(user => { 
            console.log("user: " + user)
            dispatch({type:'LOGGING_USER_IN_SUCCESS', payload: user.data})
        })
        .catch(error =>{
            dispatch({type:'LOGGING_USER_IN_FAILURE', payload: error, error:true})
        })
    }    
};