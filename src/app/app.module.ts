import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { QuizesPageComponent } from './shared/pages/quizes-page/quizes-page.component';
import { QuizePageComponent } from './shared/pages/quize-page/quize-page.component';
import { HomePageComponent} from "./shared/pages/home-page/home-page.component";
import { QuizComponent } from './shared/components/quiz/quiz.component';
import { QuizzesComponent } from './shared/components/quizzes/quizzes.component';
import { HeaderComponent } from "./shared/components/header/header.component";
import {SharedModule} from "./shared/shared.module";
import { FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    QuizesPageComponent,
    QuizePageComponent,
    HomePageComponent,
    QuizComponent,
    QuizzesComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
