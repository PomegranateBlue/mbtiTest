const SignUp = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="아이디" required />
        <input type="text" placeholder="비밀번호" required />
        <input type="text" placeholder="닉네임" required></input>
        <button>가입하기</button>
      </form>
    </div>
  );
};

export default SignUp;
