import { fetchUserAction, FETCH_USER, FETCH_USER_LOADING } from './userInfoActions';
jest.mock('../services/gitHubApi.js');

describe('tests for search user actions', () => {
  it('creates an action to fetch a user', () => {
    const dispatch = jest.fn();
    const action = fetchUserAction('tess-jl');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_USER_LOADING });
        expect(dispatch).toHaveBeenCalledWith({ 
          type: FETCH_USER, 
          payload: {
            login: 'tess-jl',
            id: 52361640,
            node_id: 'MDQ6VXNlcjUyMzYxNjQw',
            avatar_url: 'https://avatars2.githubusercontent.com/u/52361640?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/tess-jl',
            html_url: 'https://github.com/tess-jl',
            followers_url: 'https://api.github.com/users/tess-jl/followers',
            following_url: 'https://api.github.com/users/tess-jl/following{/other_user}',
            gists_url: 'https://api.github.com/users/tess-jl/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/tess-jl/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/tess-jl/subscriptions',
            organizations_url: 'https://api.github.com/users/tess-jl/orgs',
            repos_url: 'https://api.github.com/users/tess-jl/repos',
            events_url: 'https://api.github.com/users/tess-jl/events{/privacy}',
            received_events_url: 'https://api.github.com/users/tess-jl/received_events',
            type: 'User',
            site_admin: false,
            name: 'Tess',
            company: null,
            blog: '',
            location: 'Portland, OR',
            email: null,
            hireable: true,
            bio: 'Passionate programmer, creative thinker & lifelong learner',
            public_repos: 53,
            public_gists: 0,
            followers: 9,
            following: 15,
            created_at: '2019-06-29T22:29:59Z',
            updated_at: '2020-02-13T21:20:45Z'
          }
        });
      });
  });

});
