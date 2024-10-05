import { Injectable, signal } from '@angular/core';
import * as mockDataClass from './../../../mock-data.json';
import { QuizEntry } from '../model/quiz-entry';
const QUIZ_DATA: QuizEntry[] = (mockDataClass as any).default;

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  entry = signal(QUIZ_DATA);

  getEntry() {
    return this.entry.asReadonly();
  }
}
