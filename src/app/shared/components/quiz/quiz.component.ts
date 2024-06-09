import { Component, OnInit, Input } from '@angular/core';
import {Quiz} from "../../interfaces";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.less']
})
export class QuizComponent implements OnInit {

  @Input() quiz: Quiz

  constructor() { }

  ngOnInit(): void {
  }

}
