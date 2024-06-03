import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Question, Quiz} from "../../shared/interfaces";
import {QuizService} from "../../shared/quiz.service";

@Component({
  selector: 'app-create-quiz-page',
  templateUrl: './create-quiz-page.component.html',
  styleUrls: ['./create-quiz-page.component.less']
})
export class CreateQuizPageComponent implements OnInit {

  form: FormGroup;
  formCreateQuestion: FormGroup;
  questions: [Question];
  name: string;
  desc: string;


  constructor(private quizService: QuizService, private fb: FormBuilder) {
    this.questions = [{
      description: '',
      answer: '',
      clue: '',
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
    })
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

    this.quizService.create(quiz).subscribe( ()=> {
      this.form.reset();
    })
  }

  removeQuestion(index: any) {
    this.questions.splice(index, 1);
  }
}
