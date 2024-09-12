import { Component } from "@angular/core";
import AnswerComponent from "../answer/answer.component";

@Component({
    selector: 'quiz-question',
    standalone: true,
    templateUrl: './question.component.html',
    styleUrl: './question.component.css',
    imports: [AnswerComponent]
})

export default class QuestionComponent {
    constructor() {
        console.log('QuestionComponent created');
    }
}