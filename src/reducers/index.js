import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
//fake reducer to remove error message from console until real reducer implemented
    posts: postsReducer,
    users: usersReducer
});
