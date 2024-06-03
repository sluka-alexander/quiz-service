import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quiz} from "./interfaces";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})

export class QuizService {
  constructor(private http: HttpClient) {
  }

  create(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(`${environment.fbDBUrl}/quizzes.json`, quiz);
  }
}
