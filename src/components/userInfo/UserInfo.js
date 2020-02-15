import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import { isLoadingUserInfo, getUserInfo } from '../../selectors/userInfoSelectors';
import RepoList from '../repoList/RepoList';

const UserInfo = () => {
  const loading = useSelector(isLoadingUserInfo);
  const userInfo = useSelector(getUserInfo);

  if(loading) return <Loading />;

  return (
    <>
      <section>
        <h2>User Profile</h2>
        <img src={userInfo.avatar_url} /> 
        <h2>{userInfo.login}</h2>
        <p>Followers: {userInfo.followers}</p>
        <p>Following: {userInfo.following}</p>
      </section>
      <section>
        <RepoList /> 
      </section>
    </>
  );
};

export default UserInfo; 
