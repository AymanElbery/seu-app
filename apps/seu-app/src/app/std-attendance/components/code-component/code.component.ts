import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { AttendanceService } from './../../services/attendance.service';

import { HttpRequestService } from '../../../shared/services/http-request.service';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-code',
  styleUrls: ['./code.component.css'],
  templateUrl: './code.component.html'
})
export class CodeComponent implements OnDestroy{
    duration;
    timer;
    timerId;
    codeExpire = false;
    code;
    codeInsert;
    crn;
    codeError = false;
    codeSuccess= false;
    id;
    meet_id;
    pidm;
    insertBefor = false;
    constructor(
        public userService: UserService, 
        private attendanceService: AttendanceService, 
        private http: HttpClient, 
        private reqservice: HttpRequestService, 
        private router: Router, 
        private toastr: AppToasterService,
        public translate: TranslateService,
        private route: ActivatedRoute
    ) {
        this.route.queryParams.subscribe(params => {
            this.crn = params.c;
            this.id = this.userService.getActiveRoleDetails().id;
            this.checkAttend(this.crn, this.id);
        });
    }

    checkAttend(crn, id){
        this.attendanceService.getAttendStd(crn, id).subscribe(
            (response: any) => {
              if (response) {
                if (response.data.length > 0) {
                    this.insertBefor = false;
                } else {
                    this.insertBefor = true;
                    this.attendanceService.getCrn(this.crn).subscribe(
                        (response: any) => {
                          if (response) {
                              this.meet_id = response.data[0].SSRMEET_SURROGATE_ID;
                          }
                        },
                        error => {}
                    )
                }
              }
            },
            error => {}
        )
    }

    ngOnDestroy() {
        
    }

    onSubmit(){
        this.attendanceService.getCodeByCrn(this.crn, this.meet_id).subscribe(
            (response: any) => {
              if (response) {
                if (response.data.length > 0) {
                    let correctCode = response.data[0].CODE;
                    if (correctCode == this.codeInsert) {
                        this.attendanceService.confirmAttend(this.id, this.crn, this.codeInsert).subscribe(
                            (response: any) => {
                            if (response) {
                                this.router.navigate(['/std-attendance'])
                            }
                            },
                            error => {}
                        )
                    }else{
                        this.codeError = true;
                    }
                }
              }
            },
            error => {}
        )
    }


    hideCodeMessages(){
        this.codeError = false;
        this.codeSuccess = false;
    }
}