import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-skills-menu',
  templateUrl: './skills-menu.component.html',
  styleUrls: ['./skills-menu.component.css']
})
export class SkillsMenuComponent implements OnInit , AfterContentInit{

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    window['WindowStartSerices']();
  }
}
