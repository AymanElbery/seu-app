import { Component, OnInit } from '@angular/core';
import {ExamAttendanceCertificateService} from '../services/exam-attendance-certificate.service';
import { from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { ExamData } from '../../shared/models/exam-data';

@Component({
  selector: 'app-exam-attendance-certificate',
  templateUrl: './exam-attendance-certificate.component.html',
  styleUrls: ['./exam-attendance-certificate.component.scss']
})
export class ExamAttendanceCertificateComponent implements OnInit {

  eaData:ExamData={
    Final_Exam_With_Schedule:{Final_Schedule:[],labels:{},messages:[],values:{}},
    Final_Exam_Without_Schedule:{labels:{},values:{},messages:[]},
    Term_Exam_With_Schedule:{labels:{},values:{},messages:[],Term_Schedule:[]},
    Term_Exam_Without_Schedule:{labels:{},messages:[],values:{}}
  };
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

  test = {};

  firstTabTitle: string;
  secondTabTitle: string;
  thirdTabTitle: string;
  forthTabTitle: string;
  constructor( private stdData: ExamAttendanceCertificateService, private translate: TranslateService) { }

  ngOnInit() {
    this.firstTabTitle = this.translate.instant('services.exam.tt');
    this.secondTabTitle = this.translate.instant('services.exam.tnt');
    this.thirdTabTitle = this.translate.instant('services.exam.ft');
    this.forthTabTitle = this.translate.instant('services.exam.fnt');
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    this.isLoading = true;
    this.stdData.getRequest().then(
      res => {
        this.eaData = (res as any).data;
        this.isLoading = false;


        this.termSchedule = this.stdData.Download('Term_Exam_With_Schedule');
        this.termScheduleEn = this.stdData.DownloadEng('Term_Exam_With_Schedule');
        this.msgs = (res as any).msgs;


        this.term = this.stdData.Download('Term_Exam_Without_Schedule');
        this.termEn = this.stdData.DownloadEng('Term_Exam_Without_Schedule');

        this.finalschedule = this.stdData.Download('Final_Exam_With_Schedule');
        this.finalscheduleEn = this.stdData.DownloadEng('Final_Exam_With_Schedule');

        this.final = this.stdData.Download('Final_Exam_Without_Schedule');
        this.finalEn = this.stdData.DownloadEng('Final_Exam_Without_Schedule');

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
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }

}
