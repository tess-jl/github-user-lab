import reducer from './searchUserReducer';
import { FETCH_USER, FETCH_USER_LOADING } from '../actions/searchUserActions';

describe('tests for searchUserReducer', () => {
  it('handles the search user loading state', () => {
    const action = { type: FETCH_USER_LOADING };
    const initialState = {
      loading: false, 
      user: null
    };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true, 
      user: null
    });
  });

  it('handles the search user loading state', () => {
    const action = { 
      type: FETCH_USER, 
      payload: {
        img: 'imgURL', 
        username: 'tess-jl',
        followers: 2, 
        following: 2
      }
    };
    const initialState = {
      loading: true, 
      user: null
    };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false, 
      user: {
        img: 'imgURL', 
        username: 'tess-jl',
        followers: 2, 
        following: 2
      }
    });
  });
});
