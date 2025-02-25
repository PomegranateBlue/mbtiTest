import {
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";
import { successToast } from "../utils/toastUI";
const TestResultItem = ({
  id,
  nickname,
  result,
  createdAt,
  description,
  onDelete,
}) => {
  const handleDelete = async () => {
    try {
      await deleteTestResult(id);
      successToast("삭제되었습니다");
      onDelete(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePublishResult = async () => {
    try {
      await updateTestResultVisibility(id, { isPublic: true });
      successToast("테스트 결과를 공개하였습니다");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col w-full max-w-md gap-4 p-4 mx-auto bg-white rounded-lg shadow-2xl">
      <div className="w-full text-lg font-semibold text-center text-gray-800 bg-blue-500">
        {nickname}
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="text-xl font-medium text-blue-600">{result}</div>
        <div className="text-xs text-gray-400">{createdAt}</div>
      </div>
      <div className="text-sm leading-relaxed text-gray-700">{description}</div>
      <div className="flex justify-center gap-10 mt-4">
        <button
          onClick={handlePublishResult}
          className="px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
        >
          공개하기
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 text-white transition bg-red-500 rounded-md hover:bg-red-600"
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default TestResultItem;
