import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignupPage";
import ResultPage from "../pages/ResultPage";
import TestPage from "../pages/TestPage";
import ProfilePage from "../pages/ProfilePage";
import NotFountPage from "../pages/NotFound";
import Profile from "../pages/ProfilePage";

const Router = ({ isAuthenticated }) => {
  const PublicRoute = ({ element: Element, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return !isAuthenticated ? (
      <Element {...rest} />
    ) : (
      <Navigate to="/"></Navigate>
    );
  };
  const PrivateRoute = ({ element: Element, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/login"
        element={<PublicRoute element={LogInPage} />}
      ></Route>
      <Route
        path="/signup"
        element={<PublicRoute element={SignUpPage} />}
      ></Route>
      <Route
        path="/profile"
        element={<PrivateRoute element={ProfilePage} />}
      ></Route>
      <Route path="/test" element={<PrivateRoute element={TestPage} />}></Route>
      <Route
        path="/results"
        element={<PrivateRoute element={ResultPage} />}
      ></Route>
      <Route path="/*" element={<NotFountPage />}></Route>
    </Routes>
  );
};

export default Router;
