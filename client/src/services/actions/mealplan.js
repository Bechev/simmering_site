export function fetchMealPlan(user, mealplan_id){
    return (dispatch) => {
        dispatch({ type: 'GET_MEALPLAN' });    
        return fetch("http://localhost:3000/api/v1/mealplans/" + mealplan_id,{
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

export function removeRecipeFromMeal(user, meal_id, recipe_id){
    return (dispatch) => {
        dispatch({ type: 'REMOVE_RECIPE_FROM_MEAL' });    
        return fetch("http://localhost:3000/api/v1/meals/" + meal_id,{
        method: 'PUT',    
        headers:{
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token'],
                "recipe-id": recipe_id,     
            }
        })
        .then(response => response.json())
        .then(updated_meal => {
            dispatch({type:'REMOVE_RECIPE_FROM_MEAL_SUCCESS', payload: updated_meal})
        })
        .catch(error =>{
            dispatch({type:'REMOVE_RECIPE_FROM_MEAL_FAILURE', payload: error, error:true})
        })
    }    
};

export function addRecipeToMealplan(user,mealplan_id,day_date, meal_name, recipe_id){
    return (dispatch) => {
        dispatch({ type: 'ADD_RECIPE_TO_MEAL' });    
        return fetch("http://localhost:3000/api/v1/mealplans/" + mealplan_id,{
        method: 'PUT',    
        headers:{
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token'],
                "day-date": day_date,
                "meal-id": meal_name,
                "recipe-id": recipe_id,     
            }
        })
        .then(response => response.json())
        .then(updated_meal => {
            dispatch({type:'ADD_RECIPE_TO_MEAL_SUCCESS', payload: updated_meal})
        })
        .catch(error =>{
            dispatch({type:'ADD_RECIPE_TO_MEAL_FAILURE', payload: error, error:true})
        })
    }    
};