import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ element: Component, role, ...rest }) {
  const { isAuthenticated, isAuthorized } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (!isAuthorized(role)) {
    return <Navigate to="/unauthorized" />;
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

export default PrivateRoute;