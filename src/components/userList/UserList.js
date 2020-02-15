import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import { isLoadingUserInfo, getUserInfo } from '../../selectors/searchUserSelectors';

const UserList = () => {
  const loading = useSelector(isLoadingUserInfo);
  const userInfo = useSelector(getUserInfo);
  // const userRepos = useSelector();

  if(loading) return <Loading />;

  // const reposFromUser = userRepos.map(repo => (
  //   <li key={repo.id}>
  //     <Repo {...repo} />
  //   </li>
  // ));

  return (
    <>
      <section>
        <h2>User Profile</h2>
        <img src={userInfo.avatar_url} /> 
        <h2>{userInfo.login}</h2>
        <p>Followers: {userInfo.followers}</p>
        <p>Following: {userInfo.following}</p>
      </section>

      {/* <ul>
        {reposFromUser}
      </ul> */}
    </>
  );
};

export default UserList; 
