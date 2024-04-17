import React from "react";
//using dom-purify to sanitize __dangerously-set-inner-html for XXS attack prevention
import DOMpurify from "dompurify";
//html parser to convert html elem & attr strings to react equivalent, so i can ditch using __dangerously-set-inner-html
import ReactHtmlParser from "react-html-parser";

//setting custom types for Props (to research: if i can i use [interface] instead of type here?)
type Props = {
  question: string;
  answers: string[];
  callBack: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
};

//QC component
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callBack,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  //sanitize question
  const sanitizedQuestion = DOMpurify.sanitize(question);
  //sanitize answers array
  const sanitizedAnswers = answers.map((answer) => DOMpurify.sanitize(answer));

  return (
    <div>
      <p className="number">
        Question: {question} / {questionNumber}
      </p>
      <p>{ReactHtmlParser(sanitizedQuestion)}</p>
      <div className="answers">
        {sanitizedAnswers.map((answer) => (
          <div>
            <button disabled={userAnswer} onClick={callBack()}>
              <span>{ReactHtmlParser(answer)}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
