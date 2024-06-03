import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { CreateQuizPageComponent } from './shared/components/create-quiz-page/create-quiz-page.component';
import { QuizesPageComponent } from './shared/components/quizes-page/quizes-page.component';
import { QuizePageComponent } from './shared/components/quize-page/quize-page.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { QuizComponent } from './shared/components/quiz/quiz.component';
import { QuizzesComponent } from './shared/components/quizzes/quizzes.component';
import {HeaderComponent} from "./shared/components/header/header.component";

import {SharedModule} from "./shared/shared.module";
import { FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CreateQuizPageComponent,
    QuizesPageComponent,
    QuizePageComponent,
    HomePageComponent,
    QuizComponent,
    QuizzesComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    CommonModule
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
