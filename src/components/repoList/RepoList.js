import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading'; 
import Repo from '../repo /Repo';
// import { fetchUserRepos } from '../../services/gitHubApi';
import { selectRepoListLoading, selectRepoList } from '../../selectors/repoListSelectors';

const RepoList = () => {
  const loading = useSelector(selectRepoListLoading);
  const userRepos = useSelector(selectRepoList);

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

