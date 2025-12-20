import { useState } from "react";
import QuestionList from "./QuestionList";
import "./Quiz.css";

const Quiz = () => {
  let questions = [
    {
      question: "What is React?",
      options: [
        "CSS Framework",
        "React Library",
        "React Framework",
        "Testing Tool",
      ],
      answer: "React Library",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "6", "5"],
      answer: "4",
    },
  ];
  console.log(questions.length);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };

  const handleOptionClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };
  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <div>
          <QuestionList
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            handleOptionClick={handleOptionClick}
            currentAnswer={currentAnswer}
          />
          <button
            onClick={handleNextQuestion}
            className={currentAnswer === null ? "button-disable" : "button"}
            disabled={currentAnswer === null}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div className="score">Your score is {score}</div>
      )}
    </div>
  );
};

export default Quiz;
