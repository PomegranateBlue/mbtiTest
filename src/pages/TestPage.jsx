import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";

const TestPage = ({ user }) => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);

    try {
      createTestResult({
        userId: user?.id,
        result: mbtiResult,
        answer: answers,
      });
    } catch (error) {
      console.log(error);
    }
    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
  };

  const handleNavigateToResults = () => {
    navigate("/results", { state: { result } });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-slate-700">
      <div className="w-full h-full max-w-lg p-8 overflow-y-auto rounded-lg bg-slate-200">
        {!result ? (
          <>
            <h1 className="mb-6 text-3xl font-bold text-primary-color">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="mb-6 text-3xl font-bold text-primary-color">
              테스트 결과: {result}
            </h1>
            <p className="mb-6 text-lg text-gray-700">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
