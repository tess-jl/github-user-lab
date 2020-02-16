import { fetchUser } from '../services/gitHubApi.js';

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER = 'FETCH_USER'; 

export const fetchUserAction = username => dispatch => {
  dispatch({ type: FETCH_USER_LOADING });
  return fetchUser(username)
    .then(user => dispatch({
      type: FETCH_USER, 
      payload: user
    }));
};
