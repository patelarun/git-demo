import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector} from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.authentication.token);
  return (
    <Route
      {...rest}
      render={props => (token ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
