import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-skills-emp-menu',
  templateUrl: './skills-emp-menu.component.html',
  styleUrls: ['./skills-emp-menu.component.css']
})
export class SkillsEmpMenuComponent implements OnInit {

  activeRoute ;
  constructor(
    private router: Router
  ) { 
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = val.url;
        let urlArr = url.split("/");
        let length = urlArr.length;
        this.activeRoute = urlArr[length-1];
      }
       
    });
  }

  ngOnInit() {
  }

}
