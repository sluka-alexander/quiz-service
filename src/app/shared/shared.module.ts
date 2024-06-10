import { NgModule } from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NotificationComponent } from './component/notification/notification.component';
import {NotificationService} from "./services/notification.service";

@NgModule({
  imports: [
    HttpClientModule,
    // BrowserModule,
    CommonModule
  ],
  exports: [
    HttpClientModule,
    NotificationComponent,
  ],
  declarations: [
    NotificationComponent
  ],
  providers: [
    NotificationService
  ]
})

export class SharedModule {

}
