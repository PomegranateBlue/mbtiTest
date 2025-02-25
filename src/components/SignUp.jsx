import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import { successToast, errorToast } from "../utils/toastUI";
const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const registerData = { id, password, nickname };

    try {
      const response = await register(registerData);
      if (response.success) {
        successToast("회원가입 성공, 로그인해주세요");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className="flex flex-col items-center w-2/3 gap-10 p-8 m-auto mt-20 rounded-xl bg-slate-700"
        onSubmit={handleSignUp}
      >
        <span className="text-4xl font-extrabold text-white">회원가입</span>
        <input
          className="w-2/5 p-2 rounded-md"
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
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
        <input
          className="w-2/5 p-2 rounded-md"
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          required
        ></input>
        <button
          className="w-1/4 py-2 text-xl font-bold text-center text-white bg-blue-500 rounded-md"
          type="submit"
        >
          가입하기
        </button>
      </form>
    </div>
  );
};

export default SignUp;
