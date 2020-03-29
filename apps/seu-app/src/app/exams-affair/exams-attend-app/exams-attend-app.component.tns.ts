import { Component, OnInit } from '@angular/core';
import { ExamsAttendAppService } from '../services/exams-attend-app.service';
import { TranslateService } from '@ngx-translate/core';
import { ExamData } from '../../shared/models/exam-data';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';
import { AppToasterService } from '../../shared/services/app-toaster';

@Component({
  selector: 'app-exams-attend-app',
  templateUrl: './exams-attend-app.component.tns.html',
  styleUrls: ['./exams-attend-app.component.tns.scss']
})
export class ExamsAttendAppComponent implements OnInit {

  eaData: ExamData = {
    Final_Exam_With_Schedule: {Final_Schedule: [], labels: {}, values: {}, messages: []},
    Final_Exam_Without_Schedule: {labels: {}, values: {}, messages: []},
    Term_Exam_With_Schedule: {Term_Schedule: [], labels: {}, values: {}, messages: []},
    Term_Exam_Without_Schedule: {labels: {}, values: {}, messages: []}};
  finalschedule: string;
  final: string;
  termSchedule: string;
  term: string;
  finalscheduleEn: string;
  finalEn: string;
  termScheduleEn: string;
  termEn: string;
  isLoading = false;
  secondTabTitle: string;
  thirdTabTitle: string;
  forthTabTitle: string;
  msgs: any;
  printAR = '';
  printEN = '';
  isDownLoaded = false;


  constructor(private academicService: ExamsAttendAppService , private translate: TranslateService
    ,private downloader: DataDownLoadService,private toastr: AppToasterService) {

    this.secondTabTitle = this.translate.instant('services.exam.tnt');
    this.thirdTabTitle = this.translate.instant('services.exam.ft');
    this.forthTabTitle = this.translate.instant('services.exam.fnt');
 }

  ngOnInit() {
    Downloader.init();
    this.translate.get('general.ar_language').subscribe(res => {
      this.printAR = res;
    }
    );
    this.translate.get('general.en_language').subscribe(res => {
      this.printEN = res;
    });
    this.isLoading = true;

    this.academicService.getِExamsAttednace('S180105049').then(
      res => {
    this.eaData =    (res as any).data;
    if (!this.eaData ) {
      this.eaData =  {
        Final_Exam_With_Schedule: {Final_Schedule: [], labels: {}, values: {}, messages: []},
        Final_Exam_Without_Schedule: {labels: {}, values: {}, messages: []},
        Term_Exam_With_Schedule: {Term_Schedule: [], labels: {}, values: {}, messages: []},
        Term_Exam_Without_Schedule: {labels: {}, values: {}, messages: []}};
    }
    console.log('data  ' + this.eaData);
    this.msgs = (res as any).messages;
    this.isLoading = false;
      }
    );
    this.finalschedule =   this.academicService.Print_Final_Exam_With_Schedule();
    this.final = this.academicService.Print_Final_Exam_Without_Schedule();
    this.termSchedule = this.academicService.Print_Term_Exam_With_Schedule();
    this.term = this.academicService.Print_Term_Exam_Without_Schedule();
    this.finalscheduleEn =   this.academicService.Print_Final_Exam_With_ScheduleEn();
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
