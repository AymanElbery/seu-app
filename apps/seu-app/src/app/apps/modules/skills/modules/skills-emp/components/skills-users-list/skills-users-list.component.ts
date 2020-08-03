import { Component, OnInit } from '@angular/core';
import { SkillsUsersManagementService } from '../../../../services/skill-users-management';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills-users-list',
  templateUrl: './skills-users-list.component.html',
  styleUrls: ['./skills-users-list.component.css']
})
export class SkillsUsersListComponent implements OnInit {
  
  users;
  isLoading;

  constructor(
    private skillsUserService: SkillsUsersManagementService,
    private router: Router, private route: ActivatedRoute
  ) {
    this.getAllUsers();
  }

  ngOnInit() {
  }

  getAllUsers(){
    this.isLoading = true;
    this.skillsUserService.getAllUsers().subscribe(
      (response: any) => {
        if (response) {
          this.users = response.data;
        }
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    )
  }

  inactiveUser(id){
    this.isLoading = true;
    this.skillsUserService.inactiveUser(id).subscribe(
      (response: any) => {
        if (response) {
          this.getAllUsers();
        }
      },
      error => {}
    )
  } 

  activeUser(id){
    this.isLoading = true;
    this.skillsUserService.activeUser(id).subscribe(
      (response: any) => {
        if (response) {
          this.getAllUsers();
        }
      },
      error => {}
    )
  }

}
