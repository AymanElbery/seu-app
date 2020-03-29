import { Component, OnInit } from '@angular/core';
import {ExamAttendanceCertificateService} from '../services/exam-attendance-certificate.service';
import { from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { ExamData } from '../../shared/models/exam-data';
import { AppToasterService } from '../../shared/services/app-toaster';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';

@Component({
  selector: 'app-exam-attendance-certificate',
  templateUrl: './exam-attendance-certificate.component.html',
  styleUrls: ['./exam-attendance-certificate.component.scss']
})
export class ExamAttendanceCertificateComponent implements OnInit {

  isLoading = false;
  msgs;

  test = {};

  firstTabTitle: string;
  secondTabTitle: string;
  thirdTabTitle: string;
  forthTabTitle: string;
  reqData;
  status;
  arabicPrintTermWithSchedule: string;
  EngPrintTermWithSchedule: string;
  arabicPrintTermWithoutSchedule: string;
  EngPrintTermWithoutSchedule: string;
  arabicPrintFinalWithSchedule: string;
  EngPrintFinalWithSchedule: string;
  arabicPrintFinalWithoutSchedule: string;
  EngPrintFinalWithoutSchedule: string;
  printAR = '';
  printEN = '';
  isDownLoaded = false;

  // tslint:disable-next-line: variable-name
  isFinal_Exam_Without_Schedule = false;
  // tslint:disable-next-line: variable-name
  isFinal_Exam_With_Schedule = false;

  constructor(private translate: TranslateService, private toastr: AppToasterService, 
    private stdData: ExamAttendanceCertificateService,
    private downloader: DataDownLoadService) { }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  ngOnInit() {
    Downloader.init();
    this.firstTabTitle = this.translate.instant('services.exam.tt');
    this.secondTabTitle = this.translate.instant('services.exam.tnt');
    this.thirdTabTitle = this.translate.instant('services.exam.ft');
    this.forthTabTitle = this.translate.instant('services.exam.fnt');
    this.getReqs();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getReqs();
    })
  
  }
  getReqs() {
    this.isLoading = true;
    this.stdData.getRequest().then
      (res => {
        this.stdData.reqData = (res as any).data;
        this.stdData.msgs = (res as any).messages;
        this.reqData = this.stdData.reqData;
        console.log("reqdataaaaaaaaaa",this.reqData )
        this.msgs = this.stdData.msgs;
        this.isLoading = false;

        this.arabicPrintTermWithSchedule = this.stdData.Download('Term_Exam_With_Schedule');
        this.EngPrintTermWithSchedule = this.stdData.DownloadEng('Term_Exam_With_Schedule');
    
        this.arabicPrintTermWithoutSchedule = this.stdData.Download('Term_Exam_Without_Schedule');
        this.EngPrintTermWithoutSchedule = this.stdData.DownloadEng('Term_Exam_Without_Schedule');
    
        this.arabicPrintFinalWithSchedule = this.stdData.Download('Final_Exam_With_Schedule');
        this.EngPrintFinalWithSchedule = this.stdData.DownloadEng('Final_Exam_With_Schedule');
    
        this.arabicPrintFinalWithoutSchedule = this.stdData.Download('Final_Exam_Without_Schedule');
        this.EngPrintFinalWithoutSchedule = this.stdData.DownloadEng('Final_Exam_Without_Schedule');
      }, err => {
        this.toastr.tryagain;
        this.isLoading = false;
      });

  }
  

  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }

  onPrint(print:string) {
    if(print==="termSchedule"){
      print=this.arabicPrintTermWithSchedule
    }else if(print==="termScheduleEn"){
     print=this.EngPrintTermWithSchedule
    }
    else if(print==="term"){
     print=this.arabicPrintTermWithoutSchedule
 
   }else if(print==="termEn"){
     print=this.EngPrintTermWithoutSchedule
 
   }
   else if(print==="finalschedule"){
     print=this.arabicPrintFinalWithSchedule
 
   }else if(print==="finalscheduleEn"){
     print=this.EngPrintFinalWithSchedule
 
   }else if(print==="final"){
     print=this.arabicPrintFinalWithoutSchedule
 
   }else if(print==="finalEn"){
     print=this.EngPrintFinalWithoutSchedule
 
   }
    // utils.openUrl(this.termSchedule);
     this.downloader.downloadFile(print);
 
     this.downloader.csize.subscribe(x => {
   this.toastr.download();      
       if (x == '100') {
         this.isDownLoaded = true;
         this.translate.get('general.ar_print').subscribe(res => {
             this.printAR = res;
           }
           );
 
       }
     });
   }
   
 
}
