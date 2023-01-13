import { Component, OnInit, AfterContentInit } from '@angular/core';
import { SkillsUserService } from '../../../services/skill-user';

@Component({
  selector: 'app-skills-menu',
  templateUrl: './skills-menu.component.html',
  styleUrls: ['./skills-menu.component.css']
})
export class SkillsMenuComponent implements OnInit, AfterContentInit {

  constructor(private userService: SkillsUserService) { }
  menuType = '';
  ngOnInit() {
    const currURL = document.location.href;
    if (this.userService.is_std() && currURL.indexOf("/skills/std") !== -1) {
      this.menuType = 'std';
    } else if (this.userService.is_emp()) {
      this.menuType = 'emp';
    } else if (this.userService.is_instructor()) {
      this.menuType = 'staff';
    }
  }

  ngAfterContentInit() {
    window['WindowStartSerices']();
  }
}
