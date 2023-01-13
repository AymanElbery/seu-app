import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExamAttendanceCertificateAppService } from '../services/exam-attendance-certificate-app.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-exam-attendance-certificate-app',
  templateUrl: './exam-attendance-certificate-app.component.html',
  styleUrls: ['./exam-attendance-certificate-app.component.scss']
})
export class ExamAttendanceCertificateAppComponent implements OnInit, OnDestroy {

  reqData;
  msgs ;
  status;
  arabicPrintTermWithSchedule: string;
  EngPrintTermWithSchedule: string;
  arabicPrintTermWithoutSchedule: string;
  EngPrintTermWithoutSchedule: string;
  arabicPrintFinalWithSchedule: string;
  EngPrintFinalWithSchedule: string;
  arabicPrintFinalWithoutSchedule: string;
  EngPrintFinalWithoutSchedule: string;
  isLoading = false;
  constructor(private transalte: TranslateService, private toastr: AppToasterService, private printCertificate: ExamAttendanceCertificateAppService) { }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  ngOnInit() {
    this.getReqs();
    this.subscriptions = this.transalte.onLangChange.subscribe(() => {
      this.getReqs();
    })
  }
  isClosed = false;
  messagesList = [];
  getReqs() {
    this.isLoading = true;
    this.printCertificate.getRequest().then
      (res => {
       // res['status'] = 0;
        // res['messages'] = [{body:"service is closed",type:"error"}];
         if (res['status']) {
        this.printCertificate.reqData = (res as any).data;
        this.printCertificate.msgs = (res as any).messages;
        this.reqData = this.printCertificate.reqData;
        this.msgs = this.printCertificate.msgs;
        this.isClosed = false;
      } else {
        this.isClosed = true;
        this.messagesList = res['messages'];
      }
        this.isLoading = false;
        //console.log(this.reqData);
      }, err => {
        this.toastr.tryagain;
        this.isLoading = false;
      });

    this.arabicPrintTermWithSchedule = this.printCertificate.Download("Term_Exam_With_Schedule");
    this.EngPrintTermWithSchedule = this.printCertificate.DownloadEng("Term_Exam_With_Schedule");

    this.arabicPrintTermWithoutSchedule = this.printCertificate.Download("Term_Exam_Without_Schedule");
    this.EngPrintTermWithoutSchedule = this.printCertificate.DownloadEng("Term_Exam_Without_Schedule");

    this.arabicPrintFinalWithSchedule = this.printCertificate.Download("Final_Exam_With_Schedule");
    this.EngPrintFinalWithSchedule = this.printCertificate.DownloadEng("Final_Exam_With_Schedule");

    this.arabicPrintFinalWithoutSchedule = this.printCertificate.Download("Final_Exam_Without_Schedule");
    this.EngPrintFinalWithoutSchedule = this.printCertificate.DownloadEng("Final_Exam_Without_Schedule");

  }
}
