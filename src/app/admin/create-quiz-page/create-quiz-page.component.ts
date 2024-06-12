import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Question, Quiz} from "../../shared/interfaces";
import {QuizService} from "../../shared/quiz.service";
import {NotificationService} from "../../shared/services/notification.service";

@Component({
  selector: 'app-create-quiz-page',
  templateUrl: './create-quiz-page.component.html',
  styleUrls: ['./create-quiz-page.component.less']
})
export class CreateQuizPageComponent implements OnInit {
  @ViewChildren('questionDescription') questionDescription: QueryList<ElementRef>;

  form: FormGroup;
  formCreateQuestion: FormGroup;
  questions: [Question];
  name: string;
  desc: string;

  constructor(
    private quizService: QuizService,
    private fb: FormBuilder,
    private notificationService: NotificationService) {
    this.questions = [{
      description: '',
      answer: '',
      clue: '',
      explanation: ''
    }]
    this.name = '';
    this.desc = '';
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null),
      author: new FormControl(null),
    });
    this.formCreateQuestion = new FormGroup({
      nameQuestion: new FormControl(null, Validators.required),
      answerQuestion: new FormControl(Validators.required),
      clueQuestion: new FormControl(null),
    });
  }

  createQuestionBlock() {
    this.questions.push({
      description: '',
      answer: '',
      clue: '',
      explanation: ''
    });


    setTimeout(()=> {
      this.questionDescription.toArray()[this.questions.length - 1].nativeElement.focus();
    }, 0);
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const quiz: Quiz = {
      name: this.form.value.name,
      description: this.form.value.description,
      author: this.form.value.author,
      questions: this.questions
    }

    this.quizService.create(quiz).subscribe( ()=> {
      this.form.reset();
      this.questions = [{
        description: '',
        answer: '',
        clue: '',
        explanation: ''
      }];
      this.notificationService.success('Пост успешно создан!');
    })
  }

  removeQuestion(index: any) {
    this.questions.splice(index, 1);
  }
}
