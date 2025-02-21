const LogIn = () => {
  return (
    <div className="flex">
      <input type="text" placeholder="아이디" required />
      <input type="text" placeholder="비밀번호" required />
      <button>로그인</button>
    </div>
  );
};

export default LogIn;
