export function fetch_categories(){
    return (dispatch) => {
        dispatch({ type: 'LOAD_CATEGORIES' });    
        return fetch(process.env.REACT_APP_API_URL+"categories/" ,{
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
        })
        .then(response => response.json())
        .then(post => { 
            dispatch({type:'LOAD_CATEGORIES_SUCCESS', payload: post})
        })
        .catch(error =>{
            dispatch({type:'LOAD_CATEGORIES_FAILURE', payload: error, error:true})
        })
    }    
};