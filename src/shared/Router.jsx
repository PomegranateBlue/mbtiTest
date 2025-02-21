import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignupPage";
import ResultPage from "../pages/ResultPage";
import TestPage from "../pages/TestPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "../components/ProtectedRoute";
const Router = ({ isAuthed }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LogInPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      {/*아래는 전부 로그인*/}
      <Route element={<ProtectedRoute isAuthed={isAuthed} />}>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
