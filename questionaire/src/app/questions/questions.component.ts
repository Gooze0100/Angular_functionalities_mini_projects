import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataQuestions } from '../data.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  public questions;
  public answer: number = 0;
  public correctQuestion: number = 0;
  public allQuestions: number = 0;
  public end = false;
  private subscription: Subscription;
  public countDownObservable: Observable<number>;
  public time: number;
  public number1: number;
  public number2: number;
  public symbol: string;
  private howManyQuestions: number;
  @Input() inputAnswers;

  constructor(private dataQuestions: DataQuestions) {}

  ngOnInit(): void {
    this.questions = this.dataQuestions.questions;
    this.recursion();
    this.allQuestions = this.howManyQuestions;
  }

  private recursion() {
    this.countDownObs();
    this.subscription = this.countDownObservable.subscribe(
      (counter: number) => {
        this.time = counter;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.answers(-1);
        if (!this.end) {
          this.recursion();
        }
      }
    );
  }

  private countDownObs() {
    this.countDownObservable = new Observable((observer) => {
      let counter: number = 15;
      setInterval(() => {
        if (counter < 0) {
          observer.complete();
        } else {
          observer.next(counter);
        }
        counter--;
      }, 1000);
      this.getRandomInt();
    });
  }

  answers(corrAnswer) {
    if (this.symbol === '+') {
      if (this.number1 + this.number2 === Math.floor(parseInt(corrAnswer))) {
        console.log(
          'Correct answer',
          typeof corrAnswer,
          this.number1 + this.number2
        );
        this.correctQuestion++;
      }
    }
    if (this.symbol === '-') {
      if (this.number1 - this.number2 === Math.floor(parseInt(corrAnswer))) {
        console.log(
          'Correct answer',
          typeof corrAnswer,
          this.number1 - this.number2
        );
        this.correctQuestion++;
      }
    }
    if (this.symbol === '*') {
      if (this.number1 * this.number2 === Math.floor(parseInt(corrAnswer))) {
        console.log(
          'Correct answer',
          typeof corrAnswer,
          this.number1 * this.number2
        );
        this.correctQuestion++;
      }
    }
    if (this.symbol === '/') {
      if (this.number1 / this.number2 === Math.floor(parseInt(corrAnswer))) {
        this.correctQuestion++;
      }
    }
    if (this.answer < this.allQuestions - 1) {
      this.answer++;
    } else {
      this.end = true;
    }
    if (corrAnswer !== -1) {
      this.subscription.unsubscribe();
      if (!this.end) {
        this.time = 15;
        this.recursion();
      }
    }
    this.inputAnswers = '';
  }

  getRandomInt() {
    const min1 = Math.ceil(50);
    const max1 = Math.floor(100);
    const min2 = Math.ceil(1);
    const max2 = Math.floor(50);
    const min3 = Math.ceil(5);
    const max3 = Math.floor(20);

    this.number1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    this.number2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;

    this.howManyQuestions =
      Math.floor(Math.random() * (max3 - min3 + 1)) + min3;

    if (Math.random() < 0.25) {
      return (this.symbol = '+');
    } else if (Math.random() > 0.25 && Math.random() < 0.5) {
      return (this.symbol = '-');
    } else if (Math.random() > 0.5 && Math.random() < 0.75) {
      return (this.symbol = '*');
    } else if (Math.random() > 0.75 && Math.random() < 1) {
      return (this.symbol = '/');
    }
  }
}
