import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthed, redirection = "/" }) => {
  return isAuthed ? <Outlet /> : <Navigate to={redirection} replace />;
};

export default ProtectedRoute;
