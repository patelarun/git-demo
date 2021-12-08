import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector} from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.authentication.token);
  return (
    <Route
      {...rest}
      render={props => (token ? <Redirect to="/products" /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
