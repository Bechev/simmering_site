import { combineReducers } from 'redux';
import postReducer from './postReducer.js';
import postsReducer from './postsReducer.js';
import commentsReducer from './commentsReducer.js';


export default combineReducers({
    comments: commentsReducer,
    post: postReducer,
    posts: postsReducer,
  })
  