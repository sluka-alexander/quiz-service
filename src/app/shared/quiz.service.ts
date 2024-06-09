import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quiz} from "./interfaces";
import {environment} from "../../environments/environment";
import {map} from 'rxjs/operators'

@Injectable({providedIn: 'root'})

export class QuizService {
  constructor(private http: HttpClient) {
  }

  create(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(`${environment.fbDBUrl}/quizzes.json`, quiz);
  }

  getAll() {
    return this.http.get(`${environment.fbDBUrl}/quizzes.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
          }));
      }));

  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDBUrl}/quizzes/${id}.json`);
  }

  getById(id: any): Observable<Quiz> {
    return this.http.get<Quiz>(`${environment.fbDBUrl}/quizzes/${id}.json`)
      .pipe(map((quiz: Quiz)  => {
        return {
          ...quiz,
          id,
        }
      }))
  }

  update(quiz: Quiz): Observable<Quiz> {
    return this.http.patch<Quiz>(`${environment.fbDBUrl}/quizzes/${quiz.id}.json`, quiz)
  }
}
