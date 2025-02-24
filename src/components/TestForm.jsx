{
  /*여기에서는 테스트 문항을 만들기
  제출하기를 누르면 서버로 결과 전송하고
  내가 누른 항목에 대한 결과 페이지를 보여주기기 */
}
import { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-white rounded-lg">
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="mb-3 text-lg font-semibold">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-300 ${
                  answers[index]?.answer === option ? "bg-gray-100" : ""
                } hover:bg-gray-100`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index]?.answer === option}
                  onChange={() => handleChange(index, option)}
                  className="mr-2 text-primary-color"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-primary-color text-black py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
