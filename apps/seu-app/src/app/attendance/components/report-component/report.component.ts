import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { AttendanceService } from './../../services/attendance.service';

import { HttpRequestService } from '../../../shared/services/http-request.service';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import * as xlsx from 'xlsx'; 


@Component({
  selector: 'app-report',
  styleUrls: ['./report.component.css'],
  templateUrl: './report.component.html'
})
export class ReportComponent{

    @ViewChild('epltable', { static: false }) epltable: ElementRef;
    isLoading;
    crn;
    dates;
    resDates;
    datesArr = [];
    allStd;
    attendStd;
    result = [];
    excel = false;
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
        this.isLoading = true;
        this.route.queryParams.subscribe(params => {
            this.crn = params.c;
            
            this.attendanceService.getDates(this.crn).subscribe(
                (response: any) => {
                  if (response) {
                      let dates = response.data;
                      this.dates = this.formatDates(dates);
                      this.resDates = this.resetDates(dates);
                      console.log(this.dates, this.resDates);
                  }
                },
                error => {}
            )

            this.attendanceService.getAllStds(this.crn).subscribe(
                (response: any) => {
                  if (response) {
                      this.allStd = response.data;
                      this.attendanceService.getAttendStds(this.crn).subscribe(
                        (response: any) => {
                        if (response) {
                            this.attendStd = response.data;
                            this.result = this.formatStdAttend(this.allStd, this.attendStd);
                            this.isLoading = false;
                        }
                        },
                        error => {}
                    )
                  }
                },
                error => {}
            )

            
        });
    }

    formatStdAttend(all, attends){
        let result = [];
        for (let c = 0; c < all.length; c++) {
            all[c].INSERT_DATES = [];
            for (let k = 0; k < this.dates.length; k++) {
                all[c].INSERT_DATES.push("0");
            }
        }
        for (let i = 0; i < attends.length; i++) {
            for (let j = 0; j < all.length; j++) {
                if (all[j].STD_ID == attends[i].STD_ID) {
                    let index = this.datesArr.indexOf(attends[i].INSERT_DATE);
                    all[j].INSERT_DATES[index] = attends[i].INSERT_DATE;
                }
            }
            
        }
        return all;
    }

    formatDates(dates){
        dates.forEach(date => {
            this.datesArr.push(date.INSERT_DATE)
        });
        return dates;
        
    }
    resetDates(dates){
        let arrdates = [];
        let months = [];
        months['JAN'] = this.translate.instant('attends.JAN');
        months['FEB'] = this.translate.instant('attends.FEB');
        months['MAR'] = this.translate.instant('attends.MAR');
        months['APR'] = this.translate.instant('attends.APR');
        months['MAY'] = this.translate.instant('attends.MAY');
        months['JUN'] = this.translate.instant('attends.JUN');
        months['JUL'] = this.translate.instant('attends.JUL');
        months['AUG'] = this.translate.instant('attends.AUG');
        months['SEP'] = this.translate.instant('attends.SEP');
        months['OCT'] = this.translate.instant('attends.OCT');
        months['NOV'] = this.translate.instant('attends.NOV');
        months['DEC'] = this.translate.instant('attends.DEC');
        
        for (let i = 0; i < dates.length; i++) {
            arrdates[i] = {};
            arrdates[i].INSERT_DATE = dates[i].INSERT_DATE.split("-");
            arrdates[i].INSERT_DATE[1] = months[arrdates[i].INSERT_DATE[1]];
            arrdates[i].INSERT_DATE[2] = dates[i].INSERT_DATE[2] + "20";
        }
        return arrdates;
        
    }

    exportexcel(lang){

        this.excel = true;

        let fileName = (lang == "ar") ? "تقارير الحضور و الغياب.xlsx" : "Attendance Reports.xlsx" ;

        const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(this.epltable.nativeElement);
        const wb: xlsx.WorkBook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
        xlsx.writeFile(wb, fileName);
        this.excel = false;	
        
    }

}