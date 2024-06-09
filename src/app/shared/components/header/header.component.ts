import { Component, OnInit } from '@angular/core';
import {animateAccordion} from "../../animations/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  animations: animateAccordion
})

export class HeaderComponent implements OnInit {
  isOpenHeaderMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openHeaderMenu() {
    this.isOpenHeaderMenu = !this.isOpenHeaderMenu;
  }
}
