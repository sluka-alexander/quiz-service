import { Component, OnInit, OnDestroy } from '@angular/core';
import {QuizService} from "../../shared/quiz.service";
import {Quiz} from "../../shared/interfaces";
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.less']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  quizzes: Quiz[] = [];
  pSub: Subscription;
  dSub: Subscription;
  searchStr: string = '';

  constructor(private QuizService: QuizService) { }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }

    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.pSub = this.QuizService.getAll().subscribe( quizzes => {
      this.quizzes = quizzes
    });
  }

  removeQuiz(id: any) {
    let isConfirmRemove = confirm("Вы уверены, что хотите удалить?");

    if (isConfirmRemove) {
      this.dSub = this.QuizService.remove(id).subscribe(()=> {
        this.quizzes = this.quizzes.filter(quiz => quiz.id !== id);
      });
    }
  }
}
