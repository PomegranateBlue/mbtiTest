import { createContext, useState } from "react";

export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");
const loginUser = localStorage.getItem("user");
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [user, setUser] = useState(loginUser ? JSON.parse(loginUser) : null);
  //!!는 진짜 있는 값인지 확인하기 위해 사용 Truthy, Falsy한 값
  //현재 사용자의 로그인 상태 확인
  const handleLogin = (userData) => {
    localStorage.setItem("accessToken", userData.accessToken);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
