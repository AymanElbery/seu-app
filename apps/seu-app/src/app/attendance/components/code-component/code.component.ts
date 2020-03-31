import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { AttendanceService } from './../../services/attendance.service';

import { HttpRequestService } from '../../../shared/services/http-request.service';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';


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
    constructor(
        public userService: UserService, 
        private attendanceService: AttendanceService, 
        private http: HttpClient, 
        private reqservice: HttpRequestService, 
        private router: Router, 
        private toastr: AppToasterService,
        public translate: TranslateService
    ) {
        this.generateCode(100000, 999999);

        this.duration = 60 * 0.25;
        this.startTimer(this.duration);
    }

    ngOnDestroy() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    generateCode(min, max){
        this.code = Math.floor(Math.random() * (max - min + 1) + min);
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
            //document.getElementById("ten-countdown").innerHTML = this.timer;
    
            if (--timer < 0) {
                clearInterval(cmp.timerId);
                timer = 0;
                cmp.codeExpire = true;
            }
        }, 1000);
    }
}