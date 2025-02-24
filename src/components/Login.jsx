import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { login } from "../api/auth";
const LogIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userLoginData = { id, password };
      const responseData = await login(userLoginData);

      if (responseData.success) {
        handleLogin(responseData.accessToken);
        alert("로그인 성공");
        navigate("/");
      }
      console.log(responseData);
    } catch (error) {
      alert("로그인 실패", error);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-2/3 gap-10 p-10 rounded-lg bg-slate-700"
      >
        <span className="text-4xl font-extrabold text-white">로그인</span>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="w-3/5 py-2 text-xl font-bold text-white bg-blue-500 rounded-md"
          type="submit"
        >
          로그인
        </button>
        <Link to="/signup" className="w-3/5 py-2 bg-blue-500 rounded-md ">
          회원가입
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
