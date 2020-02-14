import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../../selectors/searchUserSelectors';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    event.preventDefault();
    dispatch(getUserInfo());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} placeholder="GitHub User" onChange={({ target }) => setSearchTerm(target.value) }/> 
      <button>search</button>
    </form>
  );
};

export default Search; 
