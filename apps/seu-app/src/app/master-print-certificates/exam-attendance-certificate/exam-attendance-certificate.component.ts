import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExamAttendanceCertificateService } from '../services/exam-attendance-certificate.service';
import { from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-exam-attendance-certificate',
  templateUrl: './exam-attendance-certificate.component.html',
  styleUrls: ['./exam-attendance-certificate.component.scss']
})
export class ExamAttendanceCertificateComponent implements OnInit, OnDestroy {

  reqData;
  msgs;
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
  // tslint:disable-next-line: variable-name
  isFinal_Exam_Without_Schedule = false;
  // tslint:disable-next-line: variable-name
  isFinal_Exam_With_Schedule = false;
  constructor(private transalte: TranslateService, private toastr: AppToasterService, private stdData: ExamAttendanceCertificateService) { }

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

  getReqs() {
    this.isLoading = true;
    this.stdData.getRequest().then
      (res => {
        this.stdData.reqData = (res as any).data;
        this.stdData.msgs = (res as any).messages;
        this.reqData = this.stdData.reqData;
        this.msgs = this.stdData.msgs;
        this.isLoading = false;
      }, err => {
        this.toastr.tryagain;
        this.isLoading = false;
      });
    this.arabicPrintTermWithSchedule = this.stdData.Download('Term_Exam_With_Schedule');
    this.EngPrintTermWithSchedule = this.stdData.DownloadEng('Term_Exam_With_Schedule');

    this.arabicPrintTermWithoutSchedule = this.stdData.Download('Term_Exam_Without_Schedule');
    this.EngPrintTermWithoutSchedule = this.stdData.DownloadEng('Term_Exam_Without_Schedule');

    this.arabicPrintFinalWithSchedule = this.stdData.Download('Final_Exam_With_Schedule');
    this.EngPrintFinalWithSchedule = this.stdData.DownloadEng('Final_Exam_With_Schedule');

    this.arabicPrintFinalWithoutSchedule = this.stdData.Download('Final_Exam_Without_Schedule');
    this.EngPrintFinalWithoutSchedule = this.stdData.DownloadEng('Final_Exam_Without_Schedule');

  }

}