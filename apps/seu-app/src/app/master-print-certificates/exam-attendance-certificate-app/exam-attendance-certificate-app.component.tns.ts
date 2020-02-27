import { Component, OnInit } from '@angular/core';
import { ExamAttendanceCertificateAppService } from '../services/exam-attendance-certificate-app.service';
import { TranslateService } from '@ngx-translate/core';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { ExamData } from '../../shared/models/exam-data';

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

  constructor(private printCertificate: ExamAttendanceCertificateAppService, private translate: TranslateService) { }


  ngOnInit() {
    this.firstTabTitle = this.translate.instant('services.exam.tt');
    this.secondTabTitle = this.translate.instant('services.exam.tnt');
    this.thirdTabTitle = this.translate.instant('services.exam.ft');
    this.forthTabTitle = this.translate.instant('services.exam.fnt');
    const sideDrawer = app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    this.isLoading = true;
    this.printCertificate.getRequest().then(
      res => {
        this.printCertificate.reqData = (res as any).data;
        this.printCertificate.msgs = (res as any).messages;
        this.reqData = this.printCertificate.reqData;
        console.log("dataaaaaaaaaaaaa",this.reqData.Term_Exam_With_Schedule.labels)
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

  onArabicPrint() {
    utils.openUrl(this.termSchedule);
  }
  onEnglishPrint() {
    utils.openUrl(this.termScheduleEn);
  }
  onArabicPrintTerm() {
    utils.openUrl(this.term);
  }
  onEnglishPrintTerm() {
    utils.openUrl(this.termEn);
  }
  onArabicPrintFinalSced() {
    utils.openUrl(this.finalschedule);
  }
  onEnglishPrintFinalSced() {
    utils.openUrl(this.finalscheduleEn);
  }
  onArabicPrintFinal() {
    utils.openUrl(this.final);
  }
  onEnglishPrintFinal() {
    utils.openUrl(this.finalEn);
  }
  onDrawerButtonTap(): void {
    const sideDrawer = app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
}
