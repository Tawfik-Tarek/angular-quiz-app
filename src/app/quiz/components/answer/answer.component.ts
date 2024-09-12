import { Component, computed, inject, input } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'quiz-answer',
  standalone: true,
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css',
  imports: [CommonModule], // Add the CommonModule import to access the ngClass directive
})
export default class AnswerComponent {
  answerText = input.required<string>();
  answerInddex = input.required<number>();
  quizService = inject(QuizService);
  letters = ['A', 'B', 'C', 'D'];

  isCorrectAnswer = computed(() => {
    return (
      this.quizService.isPickAnswer() &&
      this.answerText() === this.quizService.cuurentQuestion().answer
    );
  });

  isWrongAnswer = computed(() => {
    return (
      this.quizService.isPickAnswer() &&
      this.answerText() !== this.quizService.cuurentQuestion().answer
    );
  });

}
