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
  instuctors = false;
  constructor(
    private skillsUserService: SkillsUsersManagementService,
    private router: Router, private route: ActivatedRoute
  ) {
    if (document.location.href.indexOf("/instructors") !== -1) {
      this.instuctors = true;
    }
    this.getAllUsers();
  }

  ngOnInit() {
  }
  addNewUser() {
    this.router.navigate(['../users-add'], { relativeTo: this.route })
  }
  addNewInstructor() {
    this.router.navigate(['../instructors-add'], { relativeTo: this.route })
  }

  getAllUsers() {
    this.isLoading = true;
    this.skillsUserService.getAllUsers(this.instuctors).subscribe(
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

  inactiveUser(id) {
    this.isLoading = true;
    this.skillsUserService.inactiveUser(id, this.instuctors).subscribe(
      (response: any) => {
        if (response) {
          this.getAllUsers();
        }
      },
      error => { }
    )
  }

  activeUser(id) {
    this.isLoading = true;
    this.skillsUserService.activeUser(id, this.instuctors).subscribe(
      (response: any) => {
        if (response) {
          this.getAllUsers();
        }
      },
      error => { }
    )
  }

}
