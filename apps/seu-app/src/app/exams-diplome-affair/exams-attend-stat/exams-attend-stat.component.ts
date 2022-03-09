import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExamAttendanceService } from '../services/exam-attendance.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-exams-attend-stat',
  templateUrl: './exams-attend-stat.component.html',
  styleUrls: ['./exams-attend-stat.component.scss']
})
export class ExamsDiplomeAttendStatComponent implements OnInit, OnDestroy {

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

  constructor(private translate: TranslateService, private toastr: AppToasterService, private academicService: ExamAttendanceService) { }

  ngOnInit() {
    this.getRequests();
    this.subscribeLangChange();
  }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getRequests();
    });
  }
  isClosed = false;
  messagesList = [];
  getRequests() {
    this.isLoading = true;
    this.academicService.getExamsAttednace().then(
      res => {
        //res['status'] = 0;
        //res['messages'] = [{body:"service is closed",type:"error"}];
        if (res['status']) {
        this.eaData = (res as any).data;

        this.termScheduleMsgs = this.eaData.Term_Exam_With_Schedule.messages;
        this.termMsgs = this.eaData.Term_Exam_Without_Schedule.messages;
        this.finalScheduleMsgs = this.eaData.Final_Exam_With_Schedule.messages;
        this.finalMsgs = this.eaData.Final_Exam_Without_Schedule.messages;
        this.isClosed = false;
      } else {
        this.isClosed = true;
        this.messagesList = res['messages'];
      }
        this.isLoading = false;

      }, err => {
        this.toastr.tryagain();
        this.isLoading = false;
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
}
