import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {User} from "../../../../shared/interfaces";
import {AuthService} from "../../../services/auth.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {NotificationService} from "../../../../shared/services/notification.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup
  submitted: boolean = false

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private notification: NotificationService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['authFailed']) {
        this.notification.warning('Сессия истекла');
      } else if (params['authFailedData']) {
        this.notification.error('Вы ввели неверные данные');
        this.form.reset();
        this.submitted = false;
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  submit() {
    if(this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/admin', 'dashboard'])
      this.submitted = false;
    });
  }
}
