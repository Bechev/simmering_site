export function fetchUserIngredients(user){
    return (dispatch) => {
        dispatch({ type: 'FETCH_USER_INGREDIENTS' });    
        return fetch("http://localhost:3000/api/v1/ingredients" ,{
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token']
            },
        })
        .then(response => response.json())
        .then(users_ingredients => { 
            dispatch({type:'FETCH_USER_INGREDIENTS_SUCCESS', payload: users_ingredients})
        })
        .catch(error =>{
            dispatch({type:'FETCH_USER_INGREDIENTS_FAILURE', payload: error, error:true})
        })
    }    
};

export function updateUserIngredients(user, ingredient_id){
    return (dispatch) => {
        dispatch({ type: 'UPDATE_USER_INGREDIENTS' });    
        return fetch("http://localhost:3000/api/v1/ingredients/" + ingredient_id ,{
            method: "PUT",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token']
            },
        })
        .then(response => response.json())
        .then(users_ingredients => { 
            dispatch({type:'UPDATE_USER_INGREDIENTS_SUCCESS', payload: users_ingredients})
        })
        .catch(error =>{
            dispatch({type:'UPDATE_USER_INGREDIENTS_FAILURE', payload: error, error:true})
        })
    }    
};

// export function checkOrUncheckIngredient(isChecked, ingredient){
//     return { 
//         type: 'CHECK_OR_UNCHECK_INGREDIENT',
//         payload: ingredient,
//     };
// };
