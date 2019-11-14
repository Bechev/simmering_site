export function fetchUserMealPlans(user){
    return (dispatch) => {
        dispatch({ type: 'GET_MEALPLANS' });    
        return fetch("http://localhost:3000/api/v1/mealplans",{
            headers:{
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token']     
            }
        })
        .then(response => response.json())
        .then(mealplans_list => {
            dispatch({type:'GET_MEALPLANS_SUCCESS', payload: mealplans_list})
        })
        .catch(error =>{
            dispatch({type:'GET_MEALPLANS_FAILURE', payload: error, error:true})
        })
    }    
};