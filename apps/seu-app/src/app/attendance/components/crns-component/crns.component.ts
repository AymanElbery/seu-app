import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { AttendanceService } from './../../services/attendance.service';

import { HttpRequestService } from '../../../shared/services/http-request.service';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-crns',
  styleUrls: ['./crns.component.css'],
  templateUrl: './crns.component.html'
})
export class CrnsComponent{
  selection;
  crns = [];
  today;
  curTime;
  isLoading;
  constructor(
    public userService: UserService, 
    private attendanceService: AttendanceService, 
    private http: HttpClient, 
    private reqservice: HttpRequestService, 
    private router: Router, 
    private toastr: AppToasterService,
    public translate: TranslateService
  ) {
    this.isLoading = true;
    let now = new Date();
    var days = [
      this.translate.instant('services.reg.sunday'),
      this.translate.instant('services.reg.monday'),
      this.translate.instant('services.reg.tuesday'),
      this.translate.instant('services.reg.wednesday'),
      this.translate.instant('services.reg.thursday'),
      this.translate.instant('services.reg.friday'),
      this.translate.instant('services.reg.saturday')
    ];
    this.today = days[now.getDay()];
    let hour = now.getHours();
    let minutes = now.getMinutes();
    this.curTime = hour+ "" +minutes;
    if (this.curTime.length < 4) {
      this.curTime = this.curTime+"0";
    }
    this.setInstructorPidm();
  }

  setInstructorPidm(){
    this.userService.requestUser().then(
      (response: any) => {
        if (response) {
          this.getAllInstructorCurrentTermCrns(response.data.PIDM);
        }
      },
      error => { }
    );
  }

  getAllInstructorCurrentTermCrns(pidm){
    this.attendanceService.getAllCurrentTermCrns(pidm).subscribe(
      (response: any) => {
        if (response) {
          this.crns = this.resetCrns(response.data);
          this.isLoading = false;
        }
      },
      error => {}
    );
  }

  resetCrns(crns){
    for (let i = 0; i < crns.length; i++) {
      crns[i].days = [];
      crns[i].valid = false;
      if (crns[i].MEET_SUNDAY == "1") { crns[i].days.push(this.translate.instant('services.reg.sunday')) ; }
      if (crns[i].MEET_MONDAY == "1") { crns[i].days.push(this.translate.instant('services.reg.monday')); }
      if (crns[i].MEET_TUESDAY == "1") { crns[i].days.push(this.translate.instant('services.reg.tuesday')); }
      if (crns[i].MEET_WEDNESDAY == "1") { crns[i].days.push(this.translate.instant('services.reg.wednesday')); }
      if (crns[i].MEET_THURSDAY == "1") { crns[i].days.push(this.translate.instant('services.reg.thursday')); }
      if (crns[i].MEET_FRIDAY == "1") { crns[i].days.push(this.translate.instant('services.reg.friday')); }
      if (crns[i].MEET_SATURDAY == "1") { crns[i].days.push(this.translate.instant('services.reg.saturday')); }
      if (crns[i].days.indexOf(this.today) != -1) {
        if (this.curTime >= Number(crns[i].SSRMEET_BEGIN_TIME) && this.curTime <= Number(crns[i].SSRMEET_END_TIME)) {
          crns[i].valid = true;
        }
      }
    }
    return crns;
  }
}