import { Component, OnInit, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import {QuizService} from "../../shared/quiz.service";
import {ActivatedRoute, Params} from '@angular/router'
import {Question, Quiz} from "../../shared/interfaces";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {switchMap} from "rxjs/operators"
import {NotificationService} from "../../shared/services/notification.service";

@Component({
  selector: 'app-edit-quiz-page',
  templateUrl: './edit-quiz-page.component.html',
  styleUrls: ['./edit-quiz-page.component.less']
})
export class EditQuizPageComponent implements OnInit {
  @ViewChildren('questionDescription') questionDescription: QueryList<ElementRef>;

  changeQuestForm: FormGroup
  questions: [Question]
  id: string | undefined = ''

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private notificationService: NotificationService
  ) {
    this.questions = [{
      description: '',
      answer: '',
      clue: '',
      explanation: ''
    }]
  }

  ngOnInit(): void {
    this.changeQuestForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(),
      author: new FormControl(),
    });

    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.quizService.getById(params['id']);
    })
    ).subscribe((quiz: Quiz) => {
      this.changeQuestForm.controls['name'].setValue(quiz.name);
      this.changeQuestForm.controls['description'].setValue(quiz.description);
      this.changeQuestForm.controls['author'].setValue(quiz.author);
      this.questions = quiz.questions;
      this.id = quiz.id;
    })
  }

  createQuestionBlock() {
    this.questions.push({
      description: '',
      answer: '',
      clue: '',
      explanation: ''
    });

    setTimeout(()=> {
      this.questionDescription.toArray()[this.questions.length - 1].nativeElement.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  removeQuestion(index: any) {
    let isConfirmRemove = confirm("Вы уверены, что хотите удалить?");

    if (isConfirmRemove) {
      this.questions.splice(index, 1);
    }
  }

  submit() {
    if (this.changeQuestForm.invalid) {
      return;
    }

    const quiz: Quiz = {
      name: this.changeQuestForm.value.name,
      description: this.changeQuestForm.value.description,
      author: this.changeQuestForm.value.author,
      questions: this.questions,
      id: this.id
    }

    this.quizService.update(quiz).subscribe( ()=> {
      this.notificationService.success('Пост успешно изменен!');
    })
  }
}
