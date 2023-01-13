import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SkillsUserService } from '../../../services/skill-user';

@Component({
  selector: 'app-skills-std-menu',
  templateUrl: './skills-std-menu.component.html',
  styleUrls: ['./skills-std-menu.component.css']
})
export class SkillsStdMenuComponent implements OnInit {

  activeRoute;
  constructor(
    private router: Router,
    private user: SkillsUserService

  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = val.url;
        let urlArr = url.replace("/apps/skills/std/", '').split("/");
        this.activeRoute = urlArr[0];
      }
    });
  }

  ngOnInit() {
  }

}
