import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-skills-menu',
  templateUrl: './skills-menu.component.html',
  styleUrls: ['./skills-menu.component.css']
})
export class SkillsMenuComponent implements OnInit, AfterContentInit {

  constructor() { }
  menuType = '';
  ngOnInit() {

    const currURL = document.location.href;
    if (currURL.indexOf("/skills/emp") !== -1) {
      this.menuType = 'emp';
    } else if (currURL.indexOf("/std/emp") !== -1) {
      this.menuType = 'std';
    } else if (currURL.indexOf("/skills/staff") !== -1) {
      this.menuType = 'staff';
    }


  }

  ngAfterContentInit() {
    window['WindowStartSerices']();
  }
}
