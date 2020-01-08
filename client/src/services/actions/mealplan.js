export function fetchUserLastMealPlan(user){
    return (dispatch) => {
        dispatch({ type: 'GET_MEALPLAN' });    
        return fetch("http://localhost:3000/api/v1/mealplan/",{
            headers:{
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token'],
                "Access-Control-Allow-Origin": "*",
            }
        })
        .then(response => response.json())
        .then(mealplan => {
            dispatch({type:'GET_MEALPLAN_SUCCESS', payload: mealplan})
        })
        .catch(error =>{
            dispatch({type:'GET_MEALPLAN_FAILURE', payload: error, error:true})
        })
    }    
};

export function createNewMealplan(user, mealplan_name){
    return (dispatch) => {
        dispatch({ type: 'CREATE_NEW_MEALPLAN' });    
        return fetch("http://localhost:3000/api/v1/mealplans/",{
        method: 'POST',    
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "uid": user.uid,
            "client":  user.client,
            "access-token":  user['access-token'],
            },
        body:JSON.stringify({
            "mealplan_name": mealplan_name,
        })
        })
        .then(response => response.json())
        .then(response => {
            dispatch({type:'CREATE_NEW_MEALPLAN_SUCCESS', payload: response})
        })
        .catch(error =>{
            dispatch({type:'CREATE_NEW_MEALPLAN_FAILURE', payload: error, error:true})
        })
    }    
};

// export function removeRecipeFromMeal(user, meal_id, recipe_id){
//     return (dispatch) => {
//         dispatch({ type: 'REMOVE_RECIPE_FROM_MEAL' });    
//         return fetch("http://localhost:3000/api/v1/meals/" + meal_id,{
//         method: 'PUT',    
//         headers:{
//                 "uid": user.uid,
//                 "client":  user.client,
//                 "access-token":  user['access-token'],
//                 "recipe-id": recipe_id,     
//             }
//         })
//         .then(response => response.json())
//         .then(updated_meal => {
//             dispatch({type:'REMOVE_RECIPE_FROM_MEAL_SUCCESS', payload: updated_meal})
//         })
//         .catch(error =>{
//             dispatch({type:'REMOVE_RECIPE_FROM_MEAL_FAILURE', payload: error, error:true})
//         })
//     }    
// };

export function addOrRemoveRecipeToMealplan(action, user, mealplan_id, day_name, meal_name, recipe_id, multiplicator){
    return (dispatch) => {
        dispatch({ type: 'ADD_OR_REMOVE_RECIPE_TO_MEAL' });    
        return fetch("http://localhost:3000/api/v1/mealplans/" + mealplan_id,{
        method: 'PUT',    
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "uid": user.uid,
            "client":  user.client,
            "access-token":  user['access-token'],
            },
        body:JSON.stringify({
            "to-do": action,
            "day-name": day_name,
            "meal-name": meal_name,
            "recipe-id": recipe_id,
            "multiplicator": multiplicator  
        })
        })
        .then(response => response.json())
        .then(response => {
            if (action === "Remove"){
                dispatch({type:'REMOVE_RECIPE_TO_MEAL_SUCCESS', payload: response})
            }else if (action === "Add"){
                dispatch({type:'ADD_RECIPE_TO_MEAL_SUCCESS', payload: response})
            }
        })
        .catch(error =>{
            dispatch({type:'ADD_OR_REMOVE_RECIPE_TO_MEAL_FAILURE', payload: error, error:true})
        })
    }    
};