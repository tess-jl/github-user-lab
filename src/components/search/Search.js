import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserAction } from '../../actions/userInfoActions';


const Search = () => {
  const [usernameToSearch, setUsernameToSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    event.preventDefault();
    dispatch(fetchUserAction(usernameToSearch));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={usernameToSearch} placeholder="GitHub User" onChange={({ target }) => setUsernameToSearch(target.value) }/> 
      <button>search</button>
    </form>
  );
};

export default Search; 
