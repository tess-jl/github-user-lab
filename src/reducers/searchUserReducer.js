import { FETCH_USER, FETCH_USER_LOADING } from '../actions/searchUserActions';

const initialState = {
  loading: true, 
  user: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER_LOADING: 
      return { ...state, loading: true };
    case FETCH_USER: 
      return { ...state, loading: false, user: action.payload };

    default:
      return state; 
  }
}
