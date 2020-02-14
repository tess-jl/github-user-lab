import { isLoadingUserInfo } from './searchUserSelectors';

describe('search user selectors tests', () => {
  it('selects the user info loading state', () => {
    const state = {
      loading: true, 
      user: null
    };

    const loading = isLoadingUserInfo(state);
    expect(loading).toEqual(true);
  }); 

  

});

