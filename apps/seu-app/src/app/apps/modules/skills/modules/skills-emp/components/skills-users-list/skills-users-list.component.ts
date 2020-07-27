import { Component, OnInit } from '@angular/core';
import { SkillsUserService } from './../../../../services/skill-user';

@Component({
  selector: 'app-skills-users-list',
  templateUrl: './skills-users-list.component.html',
  styleUrls: ['./skills-users-list.component.css']
})
export class SkillsUsersListComponent implements OnInit {
  
  users;
  isLoading;

  constructor(
    private skillsUserService: SkillsUserService,
  ) {
    this.isLoading = true;
    this.getAllUsers();
  }

  ngOnInit() {
  }

  getAllUsers(){
    this.skillsUserService.getAllUsers().subscribe(
      (response: any) => {
        if (response) {
          this.isLoading = false;
          this.users = response.data;
        }
      },
      error => {}
    )
  }

}
