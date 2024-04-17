import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./API";
//types
import { Difficulty } from "./API";

const TOTAL_QUESTIONS = 15;

const App = () => {
  //states
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startQuiz = () => {
    //start quiz logic
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    //check answer logic
  };

  const nextQuestion = () => {
    //next question logic
  };

  return (
    <div className="app">
      <h1>Welcome to Mythology Quiz</h1>
      <button className="start-btn" onClick={startQuiz}>
        START
      </button>
      <p>Score:</p>
      <p>Loading...</p>
      <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        callBack={checkAnswer()}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
      />
      <button className="next-btn" onClick={nextQuestion}>
        NEXT
      </button>
    </div>
  );
};

export default App;
//not done
