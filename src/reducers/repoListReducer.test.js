import reducer from './repoListReducer';
import { FETCH_REPOS, FETCH_REPOS_LOADING } from '../actions/repoListActions';

describe('tests for searchUserReducer', () => {
  it('handles the repo list loading state', () => {
    const action = { type: FETCH_REPOS_LOADING };
    const initialState = {
      reposListLoading: false, 
      repos: []
    };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      reposListLoading: true, 
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
      reposListLoading: true, 
      repos: []
    };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      reposListLoading: false, 
      repos: [
        { key: 'repoOne' }, 
        { key: 'repoTwo' }
      ]
    });
  });
});
