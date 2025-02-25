import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { login } from "../api/auth";
import { errorToast, successToast } from "../utils/toastUI";
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
      console.log(responseData);
      if (responseData.success) {
        handleLogin(responseData);
        successToast("로그인 성공");
        navigate("/");
      }
    } catch (error) {
      errorToast("로그인 실패", error);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-2/3 gap-10 p-8 m-auto mt-20 rounded-xl bg-slate-700"
      >
        <span className="text-4xl font-extrabold text-white">로그인</span>
        <input
          className="w-2/5 p-2 rounded-md"
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          required
        />
        <input
          className="w-2/5 p-2 rounded-md"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="w-1/4 py-2 text-xl font-bold text-white bg-blue-500 rounded-md"
          type="submit"
        >
          로그인
        </button>
        <Link
          to="/signup"
          className="w-1/4 py-2 text-xl font-bold text-center text-white bg-blue-500 rounded-md "
        >
          회원가입
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
