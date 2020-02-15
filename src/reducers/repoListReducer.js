import { FETCH_REPOS, FETCH_REPOS_LOADING } from '../actions/repoListActions';

const initialState = {
  repoListLoading: true, 
  repos: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_REPOS_LOADING:
      return { ...state, reposListLoading: true };
    case FETCH_REPOS: 
      return { ...state, reposListLoading: false, repos: action.payload };

    default: 
      return state;
  }
}
