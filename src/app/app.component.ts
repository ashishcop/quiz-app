import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizService } from './service/quiz.service';
import { shuffle } from './shuffle';
import { SelectedAnswer } from './model/quiz-entry';
import { QuestionsComponent } from './questions/questions.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionsComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'quiz-app';

  quizService = inject(QuizService);

  entries = this.quizService.getEntries();

  randomEntries = computed(() => shuffle(this.entries()));

  selections: SelectedAnswer[] = [];

  onQuizChange(quizChange: SelectedAnswer) {
    // const selectedIndex = this.selections
    //   .map((e) => e.entry.id)
    //   .indexOf(quizChange.entry.id);

    // if (selectedIndex >= 0) {
    //   this.selections[selectedIndex] = quizChange;
    // } else {
    //   this.selections.push(quizChange);
    // }

    console.log(quizChange);
  }
}
