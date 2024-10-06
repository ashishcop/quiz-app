import { Component, EventEmitter, input, Output } from '@angular/core';
import { QuizEntry, SelectedAnswer } from '../model/quiz-entry';
import { NgClass, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgForOf, NgClass, FormsModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  entry = input.required<QuizEntry>();

  @Output() quizChange = new EventEmitter<SelectedAnswer>();

  selectedAnswer: string = '';

  onSelection(entry: QuizEntry, selectedAnswer: string) {
    this.selectedAnswer = selectedAnswer;
    this.quizChange.emit({ entry, selectedAnswer });
  }

  allAnswer(incorrect_answer: string[], answer: string) {
    return incorrect_answer.concat([answer]);
  }

  isSelected(answer: string) {
    return (
      answer.toLocaleLowerCase() === this.selectedAnswer.toLocaleLowerCase()
    );
  }
}
