export interface QuizEntry {
  id: number;
  question: string;
  answer: string;
  incorrect_answers: string[];
}

export interface SelectedAnswer {
  entry: QuizEntry;
  selectedAnswer: string;
}

export interface QuizChange {
  // all the quiz enties and their selectedAnswers
  allSelections: SelectedAnswer[];
  // latest selectedAnswer
  currentSelection: SelectedAnswer;
}
