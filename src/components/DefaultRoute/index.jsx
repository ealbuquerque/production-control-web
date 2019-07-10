import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
  withRouter,
} from 'react-router-dom';

const DefaultRoute = ({
  location,
  path,
}) => (
  <Redirect to={{
    pathname: path,
    state: {
      from: location,
    },
  }}
  />
);

DefaultRoute.defaultProps = {
  path: '/',
};

DefaultRoute.propTypes = {
  location: PropTypes.shape({
  }).isRequired,
  path: PropTypes.string,
};

export default withRouter(DefaultRoute);
