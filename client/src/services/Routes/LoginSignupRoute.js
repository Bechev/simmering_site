import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const LoginSignupRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      authed
        ?  <Redirect to="/" />
        : <Component {...props} />
    )}
  />
);