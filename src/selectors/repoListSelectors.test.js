import { selectRepoListLoading, selectRepoList } from './repoListSelectors';

describe('repo list selectors tests', () => {
  it('selects the repo list loading state', () => {
    const state = {
      repoList: {
        repoListLoading: true, 
        repos: []
      }
    };

    const loading = selectRepoListLoading(state);
    expect(loading).toEqual(true);
  });

  it('selects the user state', () => {
    const state = {
      repoList: {
        repoListLoading: false, 
        repos: [{
          name: 'repoName'
        }]
      }
    };

    const user = selectRepoList(state);
    expect(user).toEqual([{
      name: 'repoName'
    }]);
  }); 
});
