import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {NotificationService} from "../../services/notification.service";
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent implements OnInit, OnDestroy {

  aSub: Subscription

  @Input() public delay: number | undefined = 5000
           public text: string
           public type = 'success';

  constructor(private notificationService: NotificationService) {
    this.text = '';
  }

  ngOnDestroy(): void {
        if (this.aSub) {
          this.aSub.unsubscribe();
        }
    }

  ngOnInit(): void {
    this.aSub = this.notificationService.notification$.subscribe( notification => {
      this.text = notification.text;
      this.type = notification.type;
      this.delay = notification.delay

      const timeout = setTimeout(()=> {
        clearTimeout(timeout)
        this.text=''
      }, this.delay);
    });
  }

}
