import { combineReducers } from 'redux';
import userInfo from './userInfoReducer';
import repoList from './repoListReducer';

export default combineReducers({
  userInfo,
  repoList
});
