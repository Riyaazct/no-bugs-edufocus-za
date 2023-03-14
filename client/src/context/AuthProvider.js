import React from "react";
import { useState, createContext } from "react";
const AuthContext = createContext ({});

const  AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const isAuthenticated = auth && auth.role !== undefined;
  const isAuthorized = (role) => isAuthenticated && auth.role === role;
  
  return (
    <AuthContext.Provider value={{ auth, setAuth, isAuthenticated, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };