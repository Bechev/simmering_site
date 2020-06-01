export function fetchLastPublicPosts(history){
    return (dispatch) => {
        dispatch({ type: 'GET_LAST_PUBLIC_POSTS' });    
        return fetch(process.env.REACT_APP_API_URL+"posts")
        .then(response => response.json())
        .then(posts_list => {
            dispatch({type:'LOAD_LAST_PUBLIC_POSTS_SUCCESS', payload: posts_list})
        })
        .catch(error =>{
            dispatch({type:'LOAD_LAST_PUBLIC_POSTS_FAILURE', payload: error, error:true})
        })
    }    
};


// export function addToFavoriteRecipes(recipeId, userId, history){
//     return (dispatch) => {
//         dispatch({ type: 'START_ADDING_RECIPE_TO_FAVORITES' });    
//         return fetch(process.env.REACT_APP_API_URL+"/add_to_favorite/" + recipeId,{
//             method: "POST",
//             cache: "no-cache",
//             credentials: "same-origin",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//               userId: userId
//             })
//         })
//         .then(response => response.json(),
//                 error => "an error occured, can't add recipe to favorites")
//         .then(recipe => { 
//             dispatch({type:'RECIPE_ADDED_TO_FAVORITES', payload:recipe})
//         })
//         .catch( err => {console.log("an error occured" +  err)})
//     }    
// };

// export function removeFromFavoriteRecipes(recipeId, userId, history){
//     return (dispatch) => {
//         dispatch({ type: 'START_REMOVING_RECIPE_FROM_FAVORITES' });    
//         return fetch(process.env.REACT_APP_API_URL+"/remove_from_favorites/" + recipeId,{
//             method: "POST",
//             cache: "no-cache",
//             credentials: "same-origin",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//               userId: userId
//             })
//           })
//         .then(response => response.json(),
//                 error => "an error occured")
//         .then(recipes => { 
//             dispatch({type:'RECIPE_REMOVED_FROM_FAVORITES', payload:recipes})
//         })
//         .catch( err => {console.log("an error occured" +  err)})
//     }    
// };


