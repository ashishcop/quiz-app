export interface QuizEntry {
  id: number;
  question: string;
  answer: string;
  incorrect_answers: string[];
}

export interface SelectedAnswer {
  // quiz question details
  entry: QuizEntry;
  // quiz question selected answer
  selectedAnswer: string;
}
