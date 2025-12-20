const QuestionList = ({
  question,
  options,
  handleOptionClick,
  currentAnswer,
}) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            className={currentAnswer === option ? "selected" : ""}
            key={index}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default QuestionList;
