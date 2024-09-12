import { Component, inject } from "@angular/core";
import QuestionComponent from "./components/question/question.component";
import AnswerComponent from "./components/answer/answer.component";
import { QuizService } from "./services/quiz.service";

@Component({
    selector: 'app-quiz',
    standalone: true,
    templateUrl: './quiz.component.html',
    styleUrl: './quiz.component.css',
    imports: [QuestionComponent, AnswerComponent]
})

export class QuizComponent {
    quizService = inject(QuizService);
}