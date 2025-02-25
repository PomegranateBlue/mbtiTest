import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { successToast } from "../utils/toastUI";
const Navigator = () => {
  const { isAuthenticated, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOutBtn = () => {
    handleLogout();
    successToast("로그아웃 되었습니다");
    navigate("/");
  };
  return (
    <nav className="flex justify-between px-10 py-3 text-2xl text-white bg-sky-950">
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        {isAuthenticated && (
          <>
            <Link to="/results">Result</Link>
            <Link to="/profile">Profile</Link>
          </>
        )}
      </div>
      <div>
        {isAuthenticated ? (
          <button onClick={handleLogOutBtn}>LogOut</button>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </div>
    </nav>
  );
};

export default Navigator;
