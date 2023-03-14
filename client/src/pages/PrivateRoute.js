import React from "react";

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Administrator from "./Administrator";
import Member from "./Member";
export const PrivateRoute = () => {
  const { isAuthorized, auth } = useAuth();
  const { role } = auth; 
  if (!isAuthorized(role)) {
    return <Navigate to="/unauthorized" />;
  }
  return <>
  {
   role==='member'?<Member />:<Administrator /> 
  }
  </>;
};




