import { Component, OnInit } from '@angular/core';
import { ExamAttendanceService } from '../services/exam-attendance.service';
import { TranslateService } from '@ngx-translate/core';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';

@Component({
  selector: 'app-exams-attend-stat',
  templateUrl: './exams-attend-stat.component.html',
  styleUrls: ['./exams-attend-stat.component.scss']
})
export class ExamsAttendStatComponent implements OnInit {

  eaData;
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

  test = {}

  firstTabTitle:string;
  secondTabTitle:string;
  thirdTabTitle:string;
  forthTabTitle:string;



  constructor(private academicService: ExamAttendanceService,private translate: TranslateService) {

    this.firstTabTitle=this.translate.instant("services.exam.tt");
    this.secondTabTitle=this.translate.instant("services.exam.tnt");
    this.thirdTabTitle=this.translate.instant("services.exam.ft");
    this.forthTabTitle=this.translate.instant("services.exam.fnt");
 }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    this.isLoading = true;
    this.academicService.getِExamsAttednace().then(
      res => {
        this.eaData = (res as any).data;
        this.isLoading = false;

        this.termScheduleMsgs = this.eaData.Term_Exam_With_Schedule.messages;
        this.termMsgs = this.eaData.Term_Exam_Without_Schedule.messages;
        this.finalScheduleMsgs = this.eaData.Final_Exam_With_Schedule.messages;
        this.finalMsgs = this.eaData.Final_Exam_Without_Schedule.messages;

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

  onArabicPrint() {
    utils.openUrl(this.termSchedule);
  }
  onEnglishPrint() {
    utils.openUrl(this.termScheduleEn);
  }
  onArabicPrintTerm(){
    utils.openUrl(this.term);
  }
  onEnglishPrintTerm() {
    utils.openUrl(this.termEn);
  }
  onArabicPrintFinalSced(){
    utils.openUrl(this.finalschedule);
  }
  onEnglishPrintFinalSced() {
    utils.openUrl(this.finalscheduleEn);
  }
  onArabicPrintFinal(){
    utils.openUrl(this.final);
  }
  onEnglishPrintFinal() {
    utils.openUrl(this.finalEn);
  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
  }
}
