import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  console.log("authed: "+ authed),
  <Route
    {...rest}
    render={props => (
      authed
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
);