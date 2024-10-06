import { QuizChange, QuizEntry, SelectedAnswer } from './../model/quiz-entry';
import {
  Component,
  computed,
  EventEmitter,
  inject,
  Output,
  output,
} from '@angular/core';
import { QuizService } from '../service/quiz.service';
import { shuffle } from '../shuffle';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  quizService = inject(QuizService);

  @Output() quizChange = new EventEmitter<QuizChange>();

  entries = this.quizService.getEntries();

  randomEntries = computed(() => shuffle(this.entries()));

  selections: SelectedAnswer[] = [];

  onSelection(entry: QuizEntry, selectedAnswer: string) {
    const selection: SelectedAnswer = { entry, selectedAnswer };

    // update selections to maintain state of selections
    this.updateSelections(entry, selection);

    //emit detial of quiz to parent component
    this.quizChange.emit({
      allSelections: this.selections,
      currentSelection: selection,
    });
  }

  updateSelections(entry: QuizEntry, selection: SelectedAnswer) {
    // get index of selected Quiz
    const selectedIndex = this.selections
      .map((e) => e.entry.id)
      .indexOf(entry.id);

    if (selectedIndex >= 0) {
      this.selections[selectedIndex] = selection;
    } else {
      this.selections.push(selection);
    }
  }

  allAnswer(incorrect_answers: string[], answer: string) {
    return incorrect_answers.concat([answer]);
  }

  isSelected(entry: QuizEntry, answer: string) {
    // get index of selected Quiz
    const selectedIndex = this.selections
      .map((e) => e.entry.id)
      .indexOf(entry.id);

    if (selectedIndex >= 0) {
      return (
        this.selections[selectedIndex].selectedAnswer.toLocaleLowerCase() ===
        answer.toLocaleLowerCase()
      );
    } else {
      return false;
    }
  }
}
