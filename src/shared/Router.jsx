import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignupPage";
import ResultPage from "../pages/ResultPage";
import TestPage from "../pages/TestPage";
import ProfilePage from "../pages/ProfilePage";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LogInPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/test" element={<TestPage />}></Route>
      <Route path="/result" element={<ResultPage />}></Route>
    </Routes>
  );
};

export default Router;
