import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignupPage";
import ResultPage from "../pages/ResultPage";
import TestPage from "../pages/TestPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "../components/ProtectedRoute";
const Router = ({ isAuthenticated }) => {
  const PublicRoute = ({ element: Element, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return !isAuthenticated ? (
      <Element {...rest} />
    ) : (
      <Navigate to="/"></Navigate>
    );
  };
  const PrivateRoute = () => {};

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
      {/*아래는 전부 로그인*/}
      <Route element={<ProtectedRoute isAuthed={isAuthenticated} />}>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
