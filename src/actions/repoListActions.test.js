import { fetchReposAction, FETCH_REPOS, FETCH_REPOS_LOADING } from './repoListActions';
jest.mock('../services/gitHubApi.js');

describe('tests for search user actions', () => {
  it('creates an action to fetch a user', () => {
    const dispatch = jest.fn();
    const action = fetchReposAction('tess-jl');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_REPOS_LOADING });
        expect(dispatch).toHaveBeenCalledWith({ 
          type: FETCH_REPOS, 
          payload: [{
            //note actual shape of data is much larger than this
            id: 215832103,
            node_id: 'MDEwOlJlcG9zaXRvcnkyMTU4MzIxMDM=',
            name: 'adventure-quiz',
            full_name: 'tess-jl/adventure-quiz',
            private: false,
            owner: {
              login: 'tess-jl',
              id: 52361640
            }
          }]
        });
      });
  });
});
