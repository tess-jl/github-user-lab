import { combineReducers } from 'redux';
import userInfo from './userInfoReducer';
import repoList from './postDetailReducer';

export default combineReducers({
  userInfo,
  repoList
});
