import { combineReducers } from 'redux';
import postReducer from './postReducer.js';
import postsReducer from './postsReducer.js';


export default combineReducers({
    post: postReducer,
    posts: postsReducer,
  })
  