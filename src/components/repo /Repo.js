import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ repoName }) => (
  <section>
    <p>{repoName}</p>
  </section>
);

Repo.propTypes = {
  repoName: PropTypes.string.isRequired
};

export default Repo; 
