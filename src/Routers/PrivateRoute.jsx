//react
import React from 'react';

//third
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

//component
const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {

  return (
    <Route  {...rest}
      component={(props) => (
        (isAuthenticated) ?
          <Component {...props} />
          :
          <Redirect to={import.meta.env.BASE_URL + 'login'} />
      )}
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};


// 
export default PrivateRoute
