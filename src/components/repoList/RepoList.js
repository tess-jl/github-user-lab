import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading'; 
import Repo from '../repo /Repo';

const RepoList = () => {
  const loading = useSelector(selectLoadingRepoList);
  const userRepos = useSelector(selectUserRepos);

  if(loading) return <Loading />;

  const reposFromUser = userRepos.map(repo => (
    <li key={repo.id}>
      <Repo {...repo} />
    </li>
  ));

  return (
    <ul>
      {reposFromUser}
    </ul> 
  );
};

export default RepoList;

