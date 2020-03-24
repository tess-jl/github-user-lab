import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name }) => (
  <section>
    <p>{name}</p>
  </section>
);

Repo.propTypes = {
  name: PropTypes.any
};

export default Repo; 
