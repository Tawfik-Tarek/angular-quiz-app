import { Component } from "@angular/core";

@Component({
    selector: 'app-question',
    standalone: true,
    templateUrl: './question.component.html',
    styleUrl: './question.component.css'
})

export default class QuestionComponent {
    constructor() {
        console.log('QuestionComponent created');
    }
}