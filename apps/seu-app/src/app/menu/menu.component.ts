import { Component, OnInit } from '@angular/core';
import { UserService } from '../account/services/user.service';
import { ApiUserRoles } from '../shared/models/StaticData/api-user-roles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  showMySystem = false;
  menuType = 1;
  acStd = false;
  showServices = false;
  constructor(public userService: UserService, private router: Router) {
  }

  showadmis = false;
  admisPage = {};
  hasWafi = false;
  fillmenu() {
    /*if (this.userService.userData.role == 'Employee' || this.userService.userData.role == 'Instructor') {
      this.showMySystem = true;
    }*/
    // console.log('userService.userData.level',this.userService.userData.level);
    // console.log('userService.userData.level : ' + this.userService.userData.level);
    this.acStd = this.userService.userData.act_as_student;
    // tslint:disable-next-line: triple-equals
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: triple-equals
    // tslint:disable-next-line: max-line-length
    if ((this.userService.userData.activeRole == 'Student' || this.userService.userData.act_as_student) && this.userService.userData.level === 'UG') {
      // console.log('level ug');
      this.menuType = 1;
      this.showServices = true;
    } else if ((this.userService.userData.activeRole == 'Student' || this.userService.userData.act_as_student) && this.userService.userData.level === 'GR') {
      // console.log('level GR');
      this.menuType = 2;
      this.showServices = true;
    } else {
      this.menuType = 0;
      this.showServices = this.userService.userData.act_as_student;
      // console.log('else');
      // console.log(this.userService.userData.act_as_student);
      /*if (this.userService.userData.act_as_student) {
        this.acStd = this.userService.userData.act_as_student;
        this.showServices = this.acStd;
        //console.log('ac as ' + this.acStd);
      } else {
        this.acStd = false;
        this.showServices = false;
      }*/
    }
    this.admisPage = {};
    this.showadmis = false;

    if (this.userService.userData.role != 'Student') {
      this.userService.getAdmisPerm().subscribe(res => {
        this.admisPage = res['data'];
        this.showadmis = Object.keys(res["data"]).length ? true : false;
      });
    }
    //console.log(this.userService.userData.activeRole);
    if (this.userService.userData.activeRole == ApiUserRoles.Student || this.userService.userData.activeRole == ApiUserRoles.Emplpyee || this.userService.userData.activeRole == ApiUserRoles.Instructor) {
      this.hasNoRole = false;
    } else {
      this.hasNoRole = true;
    }

    this.hasWafi = (this.userService.userData.activeRole == ApiUserRoles.Emplpyee || this.userService.userData.activeRole == ApiUserRoles.Instructor);

    // this.hasWafi = true;
  }
  hasNoRole = false;
  ngOnInit() {
    // console.log('menu suer data');
    this.userService.userDataSubject.subscribe(res => {
      // console.log('fill menu');
      if (res) {
        this.fillmenu();
      }

    });

  }

  redirectTo(status) {
    this.onChange(status);
    this.fillmenu();
  }

  onChange(e) {
    // tslint:disable-next-line: triple-equals
    if (e == 0) {
      // console.log('change me not allow');
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
    this.userService.pushUserDataChanges();
  }
}
