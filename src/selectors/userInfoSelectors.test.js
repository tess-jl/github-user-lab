import { isLoadingUserInfo, getUserInfo } from './userInfoSelectors';

describe('search user selectors tests', () => {
  it('selects the user info loading state', () => {
    const state = {
      userInfo: {
        loading: true, 
        user: null
      }
    };

    const loading = isLoadingUserInfo(state);
    expect(loading).toEqual(true);
  }); 

  it('selects the user state', () => {
    const state = {
      userInfo: {
        loading: false,
        user: {
          username: 'tess-jl'
        }
      }
    };

    const user = getUserInfo(state);
    expect(user).toEqual({
      username: 'tess-jl'
    });
  }); 
});
