import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { CreateQuizPageComponent } from './shared/components/create-quiz-page/create-quiz-page.component';
import { QuizesPageComponent } from './shared/components/quizes-page/quizes-page.component';
import { QuizePageComponent } from './shared/components/quize-page/quize-page.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { QuizComponent } from './shared/components/quiz/quiz.component';
import { QuizzesComponent } from './shared/components/quizzes/quizzes.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CreateQuizPageComponent,
    QuizesPageComponent,
    QuizePageComponent,
    HomePageComponent,
    QuizComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
