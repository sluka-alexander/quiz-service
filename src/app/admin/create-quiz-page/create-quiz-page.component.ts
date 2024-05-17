import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Question, Quiz} from "../../shared/interfaces";

@Component({
  selector: 'app-create-quiz-page',
  templateUrl: './create-quiz-page.component.html',
  styleUrls: ['./create-quiz-page.component.less']
})
export class CreateQuizPageComponent implements OnInit {

  form: FormGroup
  questions: [Question];

  constructor() {
    this.questions = [{
      description: 'Сколько два плюс два',
      answer: '4',
      clue: 'Подсказка',
    }]
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      desc: new FormControl(null)
    })
  }

  createQuestionBlock() {

  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const quiz: Quiz = {
      name: this.form.value.name,
      description: this.form.value.description,
      questions: this.questions
    }
  }
}
