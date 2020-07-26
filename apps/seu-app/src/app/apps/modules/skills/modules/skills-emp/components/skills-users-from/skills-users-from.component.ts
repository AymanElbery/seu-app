import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-users-from',
  templateUrl: './skills-users-from.component.html',
  styleUrls: ['./skills-users-from.component.css']
})
export class SkillsUsersFromComponent implements OnInit {
  isLoading = true;
  constructor() { }

  ngOnInit() {
    this.isLoading = false;
  }

}
