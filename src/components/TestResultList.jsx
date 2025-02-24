{
  /*개별 카드로 만든거 렌더링하기 */
}
import TestResultItem from "../components/TestResultItem";
import { useState, useEffect } from "react";
import { getTestResults } from "../api/testResults";
const TestResultList = () => {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const result = await getTestResults();
        console.log(result);
        setTestResults(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, []);
  return (
    <div className="mx-auto">
      <h1 className="text-3xl text-center">테스트 결과</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : testResults.length === 0 ? (
        <p className="text-center text-gray-500">테스트 결과가 없습니다.</p>
      ) : (
        <div className="space-y-4">
          {testResults.map((result) => (
            <TestResultItem
              key={result.id} // 고유한 키 추가
              result={result.result}
              createdAt={result.createdAt}
              description={result.description}
            />
          ))}
        </div>
      )}
      ;
    </div>
  );
};

export default TestResultList;
