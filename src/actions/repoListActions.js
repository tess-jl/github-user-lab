import { fetchUserRepos } from '../services/gitHubApi.js';

export const FETCH_REPOS_LOADING = 'FETCH_REPOS_LOADING';
export const FETCH_REPOS = 'FETCH_REPOS';

export const fetchReposAction = username => dispatch => {
  dispatch({ type: FETCH_REPOS_LOADING });
  return fetchUserRepos(username)
    .then(repos => dispatch({
      type: FETCH_REPOS, 
      payload: repos
    }));
};
