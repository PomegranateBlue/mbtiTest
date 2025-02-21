import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { login } from "../api/auth";
const LogIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { id, password };
    try {
      const userToken = login(loginData);
      if (userToken) {
        handleLogin(userToken.accessToken);
        navigate("/");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex bg-slate-700 justify-center p-8 gap-10"
    >
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
      <button type="submit">로그인</button>
    </form>
  );
};

export default LogIn;
