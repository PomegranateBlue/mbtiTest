import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { successToast } from "../utils/toastUI";
const Navigator = () => {
  const { isAuthenticated, user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOutBtn = () => {
    handleLogout();
    successToast("로그아웃 되었습니다");
    navigate("/");
  };
  return (
    <nav className="flex justify-between px-10 py-3 text-2xl text-white bg-sky-950">
      <div className="space-x-4">
        <Link to="/">홈</Link>
        <Link to="/test">테스트</Link>
        {isAuthenticated && (
          <>
            <Link to="/results">테스트 결과</Link>
            <Link to="/profile">프로필</Link>
          </>
        )}
      </div>
      <div className="flex space-x-4 ">
        {isAuthenticated && user && <div>{user.nickname}</div>}
        {isAuthenticated ? (
          <button onClick={handleLogOutBtn}>로그아웃</button>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </div>
    </nav>
  );
};

export default Navigator;
