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
    crn;
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
            
            this.attendanceService.getCrn(this.crn).subscribe(
                (response: any) => {
                  if (response) {
                    this.setCodeData(response.data[0]);
                  }
                },
                error => {}
            )
        });

        this.duration = 60 * 10;
        this.startTimer(this.duration);
    }

    setCodeData(data){

        this.attendanceService.getCodeByCrn(data.CRN, data.SSRMEET_SURROGATE_ID).subscribe(
            (response: any) => {
              if (response) {
                if (response.data.length > 0) {
                    this.code = response.data[0].CODE;
                }else{
                    this.generateNewCode(100000, 999999, data);
                }
              }
            },
            error => {}
        )
    }

    generateNewCode(max, min, data){
        this.code = Math.floor(Math.random() * (max - min + 1) + min);
        this.attendanceService.setCode(this.code, data).subscribe(
            (response: any) => {
              if (response) {
                  console.log(response.data);
              }
            },
            error => {}
        )
    }

    ngOnDestroy() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    startTimer(duration){
        let timer = duration; 
        let minutes, seconds;
        let cmp = this;
        
        this.timerId = setInterval(function () {
            
            minutes = timer / 60;
            seconds = timer % 60;
            minutes = parseInt(minutes);
            seconds = parseInt(seconds);
            
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            cmp.timer = minutes + ":" + seconds;
        
            if (--timer < 0) {
                clearInterval(cmp.timerId);
                timer = 0;
                cmp.codeExpire = true;
                cmp.disActiveCode();
            }
        }, 1000);
    }

    closeTimer(){
        clearInterval(this.timerId);
        this.codeExpire = true;
        this.disActiveCode();
    }

    disActiveCode(){
        this.attendanceService.disActiveCode(this.code).subscribe(
            (response: any) => {
              if (response) {
                  console.log(response.data);
              }
            },
            error => {}
        )
    }
}