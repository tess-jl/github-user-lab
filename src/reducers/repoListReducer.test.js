import reducer from './repoListReducer';
import { FETCH_REPOS, FETCH_REPOS_LOADING } from '../actions/repoListActions';

describe('tests for searchUserReducer', () => {
  it('handles the repo list loading state', () => {
    const action = { type: FETCH_REPOS_LOADING };
    const initialState = {
      loading: false, 
      repos: []
    };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true, 
      repos: []
    });
  });

  it('handles the repo list loading state', () => {
    const action = { 
      type: FETCH_REPOS,
      payload: [
        { key: 'repoOne' }, 
        { key: 'repoTwo' }
      ]
    };
    const initialState = {
      loading: true, 
      repos: []
    };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false, 
      repos: [
        { key: 'repoOne' }, 
        { key: 'repoTwo' }
      ]
    });
  });
});
