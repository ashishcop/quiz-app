import { Injectable, Signal, signal } from '@angular/core';
import * as mockDataClass from './../../../mock-data.json';
import { QuizEntry } from '../model/quiz-entry';
const QUIZ_DATA: QuizEntry[] = (mockDataClass as any).default;

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private readonly entries = signal<QuizEntry[]>(QUIZ_DATA);

  getEntries(): Signal<QuizEntry[]> {
    return this.entries.asReadonly();
  }
}
