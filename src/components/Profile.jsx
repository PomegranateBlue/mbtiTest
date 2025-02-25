import { successToast } from "../utils/toastUI";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { updateProfile } from "../api/auth";
const Profile = () => {
  const { user, handleLogin } = useContext(AuthContext);
  const [newNickname, setNewNickname] = useState(user.nickname);

  const handleNicknameChange = async (e) => {
    e.preventDefault();
    try {
      const updateProfileData = await updateProfile({ nickname: newNickname });
      handleLogin(updateProfileData);
      successToast("닉네임이 변경되었습니다");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center w-2/3 gap-10 p-8 m-auto mt-20 rounded-xl bg-slate-700">
      <div className="text-2xl text-white">닉네임 변경</div>
      <input
        className="w-1/3 p-1 rounded-md"
        type="text"
        value={newNickname}
        onChange={(e) => setNewNickname(e.target.value)}
      ></input>
      <button
        onClick={handleNicknameChange}
        className="w-1/4 p-2 font-bold text-white bg-blue-400 rounded-xl"
      >
        변경하기
      </button>
    </div>
  );
};

export default Profile;
