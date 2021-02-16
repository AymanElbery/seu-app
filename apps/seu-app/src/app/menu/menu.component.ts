import { Component, OnInit, AfterContentInit } from '@angular/core';
import { UserService } from '../account/services/user.service';
import { ApiUserRoles } from '../shared/models/StaticData/api-user-roles';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TasksManagementService } from '../tasks/services/tasks-management.service';
import { EnquriesService } from '../enquries/services/enquries.service';
import { LeadershipService } from '../leadership/services/leadership.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterContentInit {
  showMySystem = false;
  menuType = 1;
  acStd = false;
  showServices = false;
  environment;
  unreadEnqueries;
  constructor(private leadershipService: LeadershipService, public userService: UserService, private router: Router, public task: TasksManagementService, private enquriesService: EnquriesService) {
    this.environment = environment;

    // if (this.environment.chatbot_mails.includes(this.userService.userData.email)) {
    let unread = this;
    // this.getUnreadEnquries();
    // setInterval(function(){ 
    //   unread.getUnreadEnquries(); 
    // }, 60000);
    // }
  }
  ngAfterContentInit() {
    window['WindowStartSerices']();
  }

  getUnreadEnquries() {
    this.enquriesService.getNotificationsEnq().subscribe(
      (response: any) => {
        if (response) {
          this.unreadEnqueries = response.data.count;
        }
      },
      error => { }
    );
  }

  showadmis = false;
  admisPage = {};
  hasWafi = false;
  hasTasks = false;
  isEmp = false;
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
        this.userService.userData['bbreports'] = (res["data"]['bbreports'] == 1);
        this.userService.userData['dashboard'] = (res["data"]['dashboard'] == 1);
      });
    }
    //console.log(this.userService.userData.activeRole);
    if (this.userService.userData.activeRole == ApiUserRoles.Student || this.userService.userData.activeRole == ApiUserRoles.Emplpyee || this.userService.userData.activeRole == ApiUserRoles.Instructor) {
      this.hasNoRole = false;
    } else {
      this.hasNoRole = true;
    }

    this.hasWafi = (this.userService.userData.activeRole == ApiUserRoles.Emplpyee || this.userService.userData.activeRole == ApiUserRoles.Instructor);
    this.hasTasks = (this.hasWafi || this.userService.userData.activeRole == 'Operations') ? true : false;
    this.isEmp = (this.userService.userData.activeRole == ApiUserRoles.Emplpyee || this.userService.userData.activeRole == ApiUserRoles.Instructor);
    if (this.hasTasks) {
      this.task.loadStats();
    }
    // check for leasership
    if (this.userService.userData.activeRole && this.userService.userData.activeRole != 'Student') {
      this.leadershipService.settings().subscribe((settings) => {
        this.leadership = settings;
      })
    } else {

    }
    // this.hasWafi = true;
  }
  leadership = {};
  hasNoRole = false;
  enqueryInterval;
  ngOnInit() {
    this.userService.userDataSubject.subscribe(res => {
      // console.log('fill menu');
      if (this.environment.chatbot_mails.includes(this.userService.userData.email)) {
        let unread = this;
        this.getUnreadEnquries();
        if (this.enqueryInterval) {
          clearInterval(this.enqueryInterval);
        }
        this.enqueryInterval = setInterval(function () {
          unread.getUnreadEnquries();
        }, 60000);
      }
      this.fillmenu();

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
        //this.router.navigateByUrl('/home/emp');
      }
      // tslint:disable-next-line: triple-equals
    } else if (e == 1) {
      this.userService.userData.activeRole = ApiUserRoles.Student;
      this.userService.userData.coll = this.userService.userData.student_details.coll;
      this.userService.userData.level = this.userService.userData.student_details.level;
      this.userService.userData.camp = this.userService.userData.student_details.camp;

      //this.router.navigateByUrl('/home/bsc');

      // tslint:disable-next-line: triple-equals
    } else if (e == 2) {
      this.userService.userData.activeRole = ApiUserRoles.Student;
      this.userService.userData.coll = this.userService.userData.student_details_gr.coll;
      this.userService.userData.level = this.userService.userData.student_details_gr.level;
      this.userService.userData.camp = this.userService.userData.student_details_gr.camp;
      //this.router.navigateByUrl('/home/msc');
    }
    //this.userService.pushUserDataChanges();
    this.router.navigateByUrl('/home');
  }
}
