import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreateQuizPageComponent } from './create-quiz-page/create-quiz-page.component';
import { EditQuizPageComponent } from './edit-quiz-page/edit-quiz-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {SharedModule} from "../shared/shared.module";
import {AuthGuard} from "./services/auth.guard";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreateQuizPageComponent,
    EditQuizPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {
            path: '', redirectTo: '/admin/login', pathMatch: 'full'
          },
          {
            path: 'login', component: LoginPageComponent
          },
          {
            path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]
          },
          {
            path: 'create', component: CreateQuizPageComponent, canActivate: [AuthGuard]
          },
          {
            path: 'quiz/:id/edit', component: EditQuizPageComponent, canActivate: [AuthGuard]
          }
        ]
      }
    ]),
  ],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})
export class AdminModule {

}
