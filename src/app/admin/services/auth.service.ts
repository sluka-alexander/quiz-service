import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FbAuthResponse, User} from "../../shared/interfaces";
import {catchError, Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()

export class AuthService {
  constructor(private http: HttpClient) {

  }

  get token(): any {
    // @ts-ignore
    const expDate = new Date(localStorage.getItem('fb-token-exp')) ;

    if (new Date > expDate) {
      this.logout();
      return 0;
    }
    return localStorage.getItem('fb-token');
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        // catchError(this.handleError.bind(this))
      );
  }

  private handleError(error:  HttpErrorResponse) {

  }

  logout() {
    this.setToken(null)
  }

  isAuth(): boolean {
    return !!this.token;
  }

  private setToken(response: any) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
