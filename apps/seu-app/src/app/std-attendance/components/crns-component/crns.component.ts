import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { AttendanceService } from '../../services/attendance.service';

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
  id;
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
    this.id = this.userService.getActiveRoleDetails().id;
    this.getAllStdCrns(this.id);
  }

  getAllStdCrns(id){
    this.attendanceService.getStdCrns(id).subscribe(
      (response: any) => {
        if (response) {
          this.crns = this.formatCrns(response.data);
          this.isLoading = false;
        }
      },
      error => {}
    )
  }

  formatCrns(crns){
    crns.forEach(crn => {
      crn.days = [];
      crn.valid = false;
      if (crn.MEET_SUNDAY == "1") { crn.days.push(this.translate.instant('services.reg.sunday')) ; }
      if (crn.MEET_MONDAY == "1") { crn.days.push(this.translate.instant('services.reg.monday')); }
      if (crn.MEET_TUESDAY == "1") { crn.days.push(this.translate.instant('services.reg.tuesday')); }
      if (crn.MEET_WEDNESDAY == "1") { crn.days.push(this.translate.instant('services.reg.wednesday')); }
      if (crn.MEET_THURSDAY == "1") { crn.days.push(this.translate.instant('services.reg.thursday')); }
      if (crn.MEET_FRIDAY == "1") { crn.days.push(this.translate.instant('services.reg.friday')); }
      if (crn.MEET_SATURDAY == "1") { crn.days.push(this.translate.instant('services.reg.saturday')); }
      if (crn.days.indexOf(this.today) != -1) {
        if (this.curTime >= Number(crn.SSRMEET_BEGIN_TIME) && this.curTime <= Number(crn.SSRMEET_END_TIME)) {
          crn.valid = true;
        }
      }
      this.attendanceService.getCodeByCrn(crn.CRN, crn.SSRMEET_SURROGATE_ID).subscribe(
        (response: any) => {
          if (response) {
            if (response.data.length > 0) {
              crn.active = true;
              crn.code = response.data[0].CODE;
              
              this.attendanceService.getSTD(crn.CRN, crn.code, this.id).subscribe(
                (response: any) => {
                  if (response) {
                    if (response.data.length > 0) {
                      crn.done = true;
                    }else{
                      crn.done = false;
                    }
                  }
                },
                error => {}
              )
            }else{
              crn.active = false;
            }
          }
        },
        error => {}
      )
    });
    console.log(crns);
    return crns;
  }
}