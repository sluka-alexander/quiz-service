import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.less']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
  }

  logout($event: MouseEvent) {
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
    $event.preventDefault();
  }
}
