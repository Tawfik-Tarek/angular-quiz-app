import { computed, Injectable, signal } from '@angular/core';
import { QuestionInterface } from '../types/question.interface';
import { routes } from '../../app.routes';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questions = signal<QuestionInterface[]>([
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['London', 'New York', 'Paris', 'Dublin'],
      answer: 'Paris',
    },
    {
      id: 2,
      question: 'What is the capital of Ireland?',
      options: ['London', 'New York', 'Paris', 'Dublin'],
      answer: 'Dublin',
    },
    {
      id: 3,
      question: 'Which company developed JavaScript?',
      options: ['Microsoft', 'Mozilla', 'Google', 'Netscape'],
      answer: 'Netscape',
    },
    {
      id: 4,
      question: 'Which directive is used for two-way data binding in Angular?',
      options: ['ngIf', 'ngFor', 'ngModel', 'ngBind'],
      answer: 'ngModel',
    },
    {
      id: 5,
      question: 'What is the primary use of React.js?',
      options: [
        'Building APIs',
        'Building User Interfaces',
        'Database Management',
        'Network Security',
      ],
      answer: 'Building User Interfaces',
    },
    {
      id: 6,
      question: 'Which method is used to render components in React?',
      options: ['render()', 'getElement()', 'createElement()', 'display()'],
      answer: 'render()',
    },
    {
      id: 7,
      question: 'Which file is the entry point for a Next.js application?',
      options: ['app.js', 'index.html', 'pages/_app.tsx', 'server.js'],
      answer: 'pages/_app.tsx',
    },
    {
      id: 8,
      question:
        'In Angular, which lifecycle hook is called after a component’s view has been fully initialized?',
      options: ['ngOnInit', 'ngOnChanges', 'ngAfterViewInit', 'ngDoCheck'],
      answer: 'ngAfterViewInit',
    },
    {
      id: 9,
      question: 'How do you pass data from parent to child component in React?',
      options: ['With props', 'With state', 'With events', 'With directives'],
      answer: 'With props',
    },
    {
      id: 10,
      question: 'Which feature of Next.js is used for server-side rendering?',
      options: [
        'useEffect',
        'getServerSideProps',
        'useState',
        'componentDidMount',
      ],
      answer: 'getServerSideProps',
    },
  ]);

  currentQuestionIndex = signal(0);
  cuurentQuestion = computed(() => {
    return this.questions()[this.currentQuestionIndex()];
  });
  currentScore = signal(0);

  showResulte = computed(() => this.currentQuestionIndex() >= this.questions().length - 1);

  nextQuestion() {
    if (this.showResulte()) {
      console.log('No more questions to display');
      return;
    }
    this.currentQuestionIndex.set(this.currentQuestionIndex() + 1);
  }

  increaseScore() {
    this.currentScore.set(this.currentScore() + 1);
  }

  getScore(): number {  
    return this.currentScore();
  }


  getQuestions(): QuestionInterface[] {
    return this.questions();
  }


    resetQuiz():void {
        this.currentQuestionIndex.set(0);
        this.currentScore.set(0);
    }

}
