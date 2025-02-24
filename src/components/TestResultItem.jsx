const TestResultItem = ({
  userId,
  id,
  result,
  createdAt,
  description,
  isPublic,
  onDelete,
  onToggle,
}) => {
  return (
    <div>
      <div>
        <span>{userId}</span>
        <span>{createdAt}</span>
      </div>
      <div>
        <span>{result}</span>
        <span>{description}</span>
      </div>
      <div>
        <button onClick={() => onToggle(id, !isPublic)}>
          {isPublic ? "비공개하기" : "공개하기"}
        </button>
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </div>
  );
};

export default TestResultItem;
