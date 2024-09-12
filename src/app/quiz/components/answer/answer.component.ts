import { Component } from '@angular/core';

@Component({
  selector: 'app-answer',
  standalone: true,
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css',
})
export default class AnswerComponent {
  constructor() {
    console.log('AnswerComponent created');
  }
}
