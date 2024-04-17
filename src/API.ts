import { type } from "os";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answer: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionState = Question & { answers : string[] }

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const apiURL = `https://opentdb.com/api.php?amount=${amount}&category=20&difficulty=${difficulty}type=multiple`;
  const data = await (await fetch(apiURL)).json();
  return data.results.map((question : Question) => (
    {
    ...question,
    answer : 
    }
  ))
};
