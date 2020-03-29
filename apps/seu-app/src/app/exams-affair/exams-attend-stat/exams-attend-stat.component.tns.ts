import { Component, OnInit } from '@angular/core';
import { ExamAttendanceService } from '../services/exam-attendance.service';
import { TranslateService } from '@ngx-translate/core';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { ExamData } from '../../shared/models/exam-data';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';
import { AppToasterService } from '../../shared/services/app-toaster';

@Component({
  selector: 'app-exams-attend-stat',
  templateUrl: './exams-attend-stat.component.tns.html',
  styleUrls: ['./exams-attend-stat.component.tns.scss']
})
export class ExamsAttendStatComponent implements OnInit {

  eaData:ExamData={
    Final_Exam_With_Schedule:{Final_Schedule:[],labels:{},values:{},messages:[]},
  Final_Exam_Without_Schedule:{labels:{},values:{},messages:[]},
  Term_Exam_With_Schedule:{Term_Schedule:[],labels:{},values:{},messages:[]},
  Term_Exam_Without_Schedule:{labels:{},values:{},messages:[]}};
  
  finalschedule: string;
  final: string;
  termSchedule: string;
  term: string;
  finalscheduleEn: string;
  finalEn: string;
  termScheduleEn: string;
  termEn: string;
  isLoading = false;

  finalScheduleMsgs;
  finalMsgs;
  termScheduleMsgs;
  termMsgs;

  test = {};

  firstTabTitle: string;
  secondTabTitle: string;
  thirdTabTitle: string;
  forthTabTitle: string;
  msgs: any;
  printAR = '';
  printEN = '';
  isDownLoaded = false;


  constructor(private academicService: ExamAttendanceService,
     private translate: TranslateService,
     private downloader: DataDownLoadService,private toastr: AppToasterService) {

    this.firstTabTitle = this.translate.instant('services.exam.tt');
    this.secondTabTitle = this.translate.instant('services.exam.tnt');
    this.thirdTabTitle = this.translate.instant('services.exam.ft');
    this.forthTabTitle = this.translate.instant('services.exam.fnt');
 }

  ngOnInit() {
    Downloader.init();
    this.isLoading = true;
    this.academicService.getِExamsAttednace().then(
      res => {
        this.eaData = (res as any).data;
        this.isLoading = false;

        this.msgs=(res as any).messages;
        this.termScheduleMsgs = this.eaData.Term_Exam_With_Schedule?this.eaData.Term_Exam_With_Schedule.messages:[];
        this.termMsgs = this.eaData.Term_Exam_Without_Schedule?this.eaData.Term_Exam_Without_Schedule.messages:[];
        this.finalScheduleMsgs =this.eaData.Final_Exam_With_Schedule? this.eaData.Final_Exam_With_Schedule.messages:[];
        this.finalMsgs = this.eaData.Final_Exam_Without_Schedule?this.eaData.Final_Exam_Without_Schedule.messages:[];
      /*  if (this.eaData.Term_Exam_With_Schedule.labels)
          alert(1);


        //console.log(this.test);

        //console.log(this.eaData.Term_Exam_With_Schedule.labels);

        //console.log(this.termScheduleMsgs);
        //console.log(this.termScheduleMsgs.length);
        //console.log(this.termMsgs);

        //console.log(this.finalScheduleMsgs);
        //console.log(this.finalMsgs);*/
      }
    );
    this.finalschedule = this.academicService.Print_Final_Exam_With_Schedule();
    this.final = this.academicService.Print_Final_Exam_Without_Schedule();
    this.termSchedule = this.academicService.Print_Term_Exam_With_Schedule();
    this.term = this.academicService.Print_Term_Exam_Without_Schedule();
    this.finalscheduleEn = this.academicService.Print_Final_Exam_With_ScheduleEn();
    this.finalEn = this.academicService.Print_Final_Exam_Without_ScheduleEn();
    this.termScheduleEn = this.academicService.Print_Term_Exam_With_ScheduleEn();
    this.termEn = this.academicService.Print_Term_Exam_Without_ScheduleEn();
  }

  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }

  onPrint(print:string) {
    if(print==="termSchedule"){
      print=this.termSchedule
    }else if(print==="termScheduleEn"){
     print=this.termScheduleEn
    }
    else if(print==="term"){
     print=this.term
 
   }else if(print==="termEn"){
     print=this.termEn
 
   }
   else if(print==="finalschedule"){
     print=this.finalschedule
 
   }else if(print==="finalscheduleEn"){
     print=this.finalscheduleEn
 
   }else if(print==="final"){
     print=this.final
 
   }else if(print==="finalEn"){
     print=this.finalEn
 
   }
    // utils.openUrl(this.termSchedule);
     this.downloader.downloadFile(print);
     this.toastr.download();      
     this.downloader.csize.subscribe(x => {
       this.printAR = x;
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

