import { Component, OnInit } from '@angular/core';
import { ExamsAttendAppService } from '../services/exams-attend-app.service';
import { TranslateService } from '@ngx-translate/core';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { ExamData } from '../../shared/models/exam-data';

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



  constructor(private academicService: ExamsAttendAppService , private translate: TranslateService) {

    this.secondTabTitle = this.translate.instant('services.exam.tnt');
    this.thirdTabTitle = this.translate.instant('services.exam.ft');
    this.forthTabTitle = this.translate.instant('services.exam.fnt');
 }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
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
