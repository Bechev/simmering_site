import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import postReducer from './postReducer.js';
import blogReducer from './blogReducer.js';
import postsReducer from './postsReducer.js';
import commentReducer from './commentReducer.js';
import commentsReducer from './commentsReducer.js';
import mealplansReducer from './mealplansReducer.js'
import mealplanReducer from './mealplanReducer.js'
import categoriesReducer from './categoriesReducer.js'
import recipeReducer from './recipeReducer.js'
import groceriesListReducer from './groceriesListReducer.js'
import userIngredientsReducer from './userIngredientsReducer.js'
import userReducer from './userReducer.js'
import suggestionsReducer from './suggestionsReducer.js'


export default combineReducers({
    auth: authReducer,
    blog: blogReducer,
    post: postReducer,
    posts: postsReducer,
    recipe: recipeReducer,
    comment: commentReducer,
    comments: commentsReducer,
    mealplan: mealplanReducer,
    mealplans: mealplansReducer,
    userParameters: userReducer,
    categories: categoriesReducer,
    suggestions: suggestionsReducer,
    groceriesList: groceriesListReducer,
    userIngredients: userIngredientsReducer,
  })
  