import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, redirection = "/" }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={redirection} replace />;
};

export default ProtectedRoute;
