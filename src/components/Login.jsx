const LogIn = () => {
  return (
    <div className="flex bg-slate-700 justify-center p-8 gap-10">
      <input type="text" placeholder="아이디" required />
      <input type="text" placeholder="비밀번호" required />
      <button>로그인</button>
    </div>
  );
};

export default LogIn;
