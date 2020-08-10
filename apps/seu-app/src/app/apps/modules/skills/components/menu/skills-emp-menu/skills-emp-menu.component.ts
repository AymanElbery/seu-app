import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { SkillsUserService } from '../../../services/skill-user';

@Component({
  selector: 'app-skills-emp-menu',
  templateUrl: './skills-emp-menu.component.html',
  styleUrls: ['./skills-emp-menu.component.css']
})
export class SkillsEmpMenuComponent implements OnInit {

  activeRoute;
  constructor(
    private router: Router,
    private user: SkillsUserService

  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = val.url;
        let urlArr = url.split("/");
        let length = urlArr.length;
        this.activeRoute = urlArr[length - 1];
      }
    });
  }

  is_admin = false;
  ngOnInit() {
    this.setSettings();
    this.user.userHasLoaded.subscribe(() => {
      this.setSettings();
    });
  }

  setSettings() {
    this.is_admin = this.user.is_admin();

  }

}
