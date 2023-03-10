import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
  const location = useLocation();
//   if (!auth?.user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
 return <Outlet />;
};

export default RequireAuth;