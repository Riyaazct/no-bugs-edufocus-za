import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    const { auth } = useContext(AuthContext);
  const isAuthenticated = auth && auth.role !== undefined;
  const isAuthorized = (role) => isAuthenticated && auth.role === role && auth.role !== undefined;;
  return { isAuthenticated, isAuthorized };


};

export default useAuth;