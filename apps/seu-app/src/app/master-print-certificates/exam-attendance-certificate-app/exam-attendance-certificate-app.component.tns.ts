import { Component, OnInit } from '@angular/core';
import { ExamAttendanceCertificateAppService } from '../services/exam-attendance-certificate-app.service';
import { TranslateService } from '@ngx-translate/core';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';
import { AppToasterService } from '../../shared/services/app-toaster';

@Component({
  selector: 'app-exam-attendance-certificate-app',
  templateUrl: './exam-attendance-certificate-app.component.html',
  styleUrls: ['./exam-attendance-certificate-app.component.scss']
})
export class ExamAttendanceCertificateAppComponent implements OnInit {


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
  msgs;
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
  test = {};

  firstTabTitle: string;
  secondTabTitle: string;
  thirdTabTitle: string;
  forthTabTitle: string;
  printAR = '';
  printEN = '';
  isDownLoaded = false;

  constructor(private printCertificate: ExamAttendanceCertificateAppService, 
    private translate: TranslateService,
    private downloader: DataDownLoadService,private toastr: AppToasterService
    ) { }


  ngOnInit() {
    Downloader.init();
    this.firstTabTitle = this.translate.instant('services.exam.tt');
    this.secondTabTitle = this.translate.instant('services.exam.tnt');
    this.thirdTabTitle = this.translate.instant('services.exam.ft');
    this.forthTabTitle = this.translate.instant('services.exam.fnt');
    this.isLoading = true;
    this.printCertificate.getRequest().then(
      res => {
        this.printCertificate.reqData = (res as any).data;
        this.printCertificate.msgs = (res as any).messages;
        this.reqData = this.printCertificate.reqData;
        this.msgs = this.printCertificate.msgs;
        this.isLoading = false;


        this.termSchedule = this.printCertificate.Download('Term_Exam_With_Schedule');
        this.termScheduleEn = this.printCertificate.DownloadEng('Term_Exam_With_Schedule');


        this.term = this.printCertificate.Download('Term_Exam_Without_Schedule');
        this.termEn = this.printCertificate.DownloadEng('Term_Exam_Without_Schedule');

        this.finalschedule = this.printCertificate.Download('Final_Exam_With_Schedule');
        this.finalscheduleEn = this.printCertificate.DownloadEng('Final_Exam_With_Schedule');

        this.final = this.printCertificate.Download('Final_Exam_Without_Schedule');
        this.finalEn = this.printCertificate.DownloadEng('Final_Exam_Without_Schedule');

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
