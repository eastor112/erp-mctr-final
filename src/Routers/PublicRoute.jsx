import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {

  const lastpath = localStorage.getItem('lastpath');

  return (
    <Route
      {...rest}
      component={(props) => (
        (!isAuthenticated) ?
          <Component {...props} />
          :
          <Redirect to={lastpath ? lastpath : import.meta.env.BASE_URL + 'panel'} />
      )}
    />
  )
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

export default PublicRoute
