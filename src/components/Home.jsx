const HomeComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="mt-8 text-4xl font-bold">MBTI 테스트</h1>
      <h2 className="m-8 text-2xl">자신의 성격 유형을 확인해보세요</h2>
      <div className="flex justify-center w-4/5 gap-8">
        <div className="w-3/5 px-10 py-5 text-white bg-blue-900 rounded-md shadow-lg">
          <h3 className="text-2xl font-bold">성격 유형 검사</h3>
          <span className="text-gray-300">
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </span>
        </div>
        <div className="w-3/5 px-10 py-5 text-white bg-blue-900 rounded-md shadow-lg">
          <h3 className="text-2xl font-bold">성격 유형 이해</h3>
          <span className="text-gray-300">
            다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
          </span>
        </div>
        <div className="w-3/5 px-10 py-5 text-white bg-blue-900 rounded-md shadow-lg">
          <h3 className="text-2xl font-bold">팀 평가</h3>
          <span className="text-gray-300">
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </span>
        </div>
      </div>

      <button className="w-64 px-6 py-3 mt-4 font-semibold text-white transition-all bg-blue-600 border-2 border-blue-800 rounded-md shadow-md hover:bg-blue-700 hover:border-blue-900">
        테스트 시작하기
      </button>
    </div>
  );
};
export default HomeComponent;
