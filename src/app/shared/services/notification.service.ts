import {Injectable} from '@angular/core';
import {Subject} from 'rxjs'
import {Notification} from "../interfaces";

@Injectable()

export class NotificationService {
  public notification$ = new Subject<Notification>()

  success(text: string, delay?: number) {
    this.notification$.next({type: 'success', text, delay})
  }

  warning(text: string, delay?: number) {
    this.notification$.next({type: 'warning', text, delay})
  }

  error(text: string, delay?: number) {
    this.notification$.next({type: 'error', text, delay})
  }
}
