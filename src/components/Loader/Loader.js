import React from 'react';
import PropTypes from 'prop-types';

import classes from './Loader.module.css';

const loader = (props) => {
  const { loading, children } = props;
  if (!loading) return children;

  return (
    <div className={classes.Loader}>
      <p className={classes.Spinner} />
      <p>Loading</p>
    </div>
  );
};

loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

loader.defaultProps = {
  children: null,
};

export default loader;
