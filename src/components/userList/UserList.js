import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {
  const dispatch = useDispatch();
  const loading = useSelector();

  // const repos = useSelector();
  // const userInfo = useSelector(); //for getting userPic, followers, following

  // useEffect(() => {
  //   dispatch(fetchRepos());
  // }, []);

  if(loading) return <Loading />;

  // const reposFromUser = repos.map(repo => (
  //   <li key={repo.id}>
  //     <Repo {...repo} />
  //   </li>
  // ));

  return (
    <>
      <section>
        <h2>User Profile</h2>
        <img src={userPic} /> 
        <h2>{userName}</h2>
        <p>Followers: {followers}</p>
        <p>Following: {followings}</p>
      </section>

      <ul>
        {reposFromUser}
      </ul>
    </>
  );
};

UserList.propTypes = {

};

export default UserList; 
