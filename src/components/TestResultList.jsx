import TestResultItem from "./TestResultItem";
import {
  getTestResults,
  createTestResult,
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";
import { useState, useEffect } from "react";
const TestResultList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await getTestResults();
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResults();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTestResult(id);
      setResults(results.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>테스트 결과</div>
      <div>
        {results.length>0?}
      </div>
    </div>
  );
};

export default TestResultList;
