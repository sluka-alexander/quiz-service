import { NgModule } from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NotificationComponent } from './components/notification/notification.component';
import {NotificationService} from "./services/notification.service";
import { RulesPageComponent } from './pages/rules-page/rules-page.component';

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
    NotificationComponent,
    RulesPageComponent
  ],
  providers: [
    NotificationService
  ]
})

export class SharedModule {

}
