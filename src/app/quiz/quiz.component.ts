import { Component } from "@angular/core";

@Component({
    selector: 'app-quiz',
    standalone: true,
    templateUrl: './quiz.component.html',
    styleUrl: './quiz.component.css'
})

export class QuizComponent {
    constructor() {
        console.log('QuizComponent created');
    }
}