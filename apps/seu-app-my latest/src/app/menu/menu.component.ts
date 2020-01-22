import { Component, OnInit } from '@angular/core';
import { UserService } from '../account/services/user.service';
import { ApiUserRoles } from '../shared/models/StaticData/api-user-roles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuType = 1;
  acStd = false;
  showServices = false;
  constructor(public userService: UserService, private router: Router) {
  }


  fillmenu() {

    console.log('userService.userData.level');
    console.log('userService.userData.level : ' + this.userService.userData.level);
    this.acStd = false;
    if (!this.userService.userData.act_as_student && this.userService.userData.level === 'UG') {
      console.log('level ug');
      this.menuType = 1;
      this.showServices = true;

    } else if (!this.userService.userData.act_as_student && this.userService.userData.level === 'GR') {
      console.log('level GR');

      this.menuType = 2;
      this.showServices = true;
    } else {
      this.menuType = 0;
      console.log('else');
      console.log(this.userService.userData.act_as_student);
      if (this.userService.userData.act_as_student) {

        this.acStd = this.userService.userData.act_as_student;
        this.showServices = this.acStd;
        console.log('ac as ' + this.acStd);
      } else {
        this.acStd = false;
        this.showServices = false;



      }
    }
  }
  ngOnInit() {
    console.log('menu suer data');
    this.userService.loadUserData().then(res => {
      console.log('fill menu');
      this.fillmenu();

    });

  }

  onChange(e) {
    // tslint:disable-next-line: triple-equals
    if (e == 0) {
      console.log('change me not allow');
      if (this.userService.userData.act_as_student === true) {
        this.userService.userData.activeRole = this.userService.userData.role;
        this.userService.userData.coll = '';
        this.userService.userData.level = '';
        this.userService.userData.camp = '';
        this.router.navigateByUrl('/home/emp');
      }
      // tslint:disable-next-line: triple-equals
    } else if (e == 1) {
      this.userService.userData.activeRole = ApiUserRoles.Student;
      this.userService.userData.coll = this.userService.userData.student_details.coll;
      this.userService.userData.level = this.userService.userData.student_details.level;
      this.userService.userData.camp = this.userService.userData.student_details.camp;

      this.router.navigateByUrl('/home/bsc');

      // tslint:disable-next-line: triple-equals
    } else if (e == 2) {
      this.userService.userData.activeRole = ApiUserRoles.Student;
      this.userService.userData.coll = this.userService.userData.student_details_gr.coll;
      this.userService.userData.level = this.userService.userData.student_details_gr.level;
      this.userService.userData.camp = this.userService.userData.student_details_gr.camp;
      this.router.navigateByUrl('/home/msc');


    }
  }
}