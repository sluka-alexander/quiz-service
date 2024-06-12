import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../quiz.service";
import {ActivatedRoute, Params} from '@angular/router'
import {Quiz} from "../../interfaces";
import {switchMap} from "rxjs/operators"
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-quize-page',
  templateUrl: './quize-page.component.html',
  styleUrls: ['./quize-page.component.less']
})
export class QuizePageComponent implements OnInit {

  quiz: any;
  counterCompletedQuestion: number = 0;
  countersMistake: number = 0;
  isWin: boolean = false;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private notification: NotificationService
    )
  {
    this.quiz = {
      name: '',
      description: '',
      author: '',
      questions: [],
    }
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.quizService.getById(params['id']);
      })
    ).subscribe((quiz: Quiz) => {
      this.quiz.name = quiz.name;
      this.quiz.description = quiz.description;
      this.quiz.author = quiz.author;
      this.quiz.author;
      quiz.questions.forEach(question => {
        this.quiz.questions.push({
          description: question.description,
          answer: question.answer,
          clue: question.clue,
          explanation: question.explanation,
          isOpenClue: false,
          isComplete: false,
          userOption: ''
        });
      });
    });
  }

  checkAnswer(id: number) {
    if (this.quiz.questions[id].answer.trim().toLowerCase().toString() === this.quiz.questions[id].userOption.trim().toLowerCase().toString()) {
      this.quiz.questions[id].isComplete = true;
      this.counterCompletedQuestion++;
      this.notification.success('Вы ответили верно!', 2000);
    }
    else {
      this.countersMistake++;
      this.notification.error('Вы ответили неверно!', 2000);
    }

    this.checkWin();
  }

  protected readonly length = length;

  private checkWin() {
    if (this.counterCompletedQuestion === this.quiz.questions.length) {
      this.isWin = true;
    }
  }

  redirectUncompletedQuestion() {
    // const notCompletedInputs = this.quiz.questions.filter((question: { isComplete: boolean; }) => {
    //   return !question.isComplete;
    // });
    //
    // if (notCompletedInputs.length) {
    //   notCompletedInputs[0].userOption.focus();
    // }
  }
}
