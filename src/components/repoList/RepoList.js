import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading'; 
import Repo from '../repo /Repo';
import { selectReposListLoading, selectReposList } from '../../selectors/repoListSelectors';

const RepoList = () => {
  const loading = useSelector(selectReposListLoading);
  const userRepos = useSelector(selectReposList);

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

