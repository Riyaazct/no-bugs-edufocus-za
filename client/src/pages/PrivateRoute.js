import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({ element: Component, infoRole, ...rest }) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/unauthorized" replace />;
  }

  if (infoRole && user.role !== infoRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Route {...rest} element={<Component />} />;
}

