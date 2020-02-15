import { selectRepoListLoading, selectReposList } from './repoListSelectors';

describe('repo list selectors tests', () => {
  it('selects the repo list loading state', () => {
    const state = {
      loading: true, 
      repos: []
    };

    const loading = selectRepoListLoading(state);
    expect(loading).toEqual(true);
  });

  it('selects the user state', () => {
    const state = {
      loading: false, 
      repos: [{
        name: 'repoName'
      }]
    };

    const user = selectReposList(state);
    expect(user).toEqual([{
      name: 'repoName'
    }]);
  }); 
});
