import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import postReducer from './postReducer.js';
import postsReducer from './postsReducer.js';
import commentReducer from './commentReducer.js';
import commentsReducer from './commentsReducer.js';


export default combineReducers({
    auth: authReducer,
    post: postReducer,
    posts: postsReducer,
    comment: commentReducer,
    comments: commentsReducer,
  })
  