import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/HomePage";
import SignUpPage from "../pages/HomePage";
import ResultPage from "../pages/HomePage";
import TestPage from "../pages/HomePage";
import ProfilePage from "../pages/HomePage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="login" element={<LogInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="profile" element={<ProfilePage />}></Route>
        <Route path="test" element={<TestPage />}></Route>
        <Route path="result" element={<ResultPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
