import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../quiz.service";
import {Quiz} from "../../interfaces";
import {Observable} from "rxjs"

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  quizzez$: Observable<Quiz[]>

  constructor(private quizService: QuizService) {

  }

  ngOnInit(): void {
    this.quizzez$ = this.quizService.getAll();
  }
}
