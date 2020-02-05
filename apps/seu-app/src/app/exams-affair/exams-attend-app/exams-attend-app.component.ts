import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExamsAttendAppService } from '../services/exams-attend-app.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-exams-attend-app',
  templateUrl: './exams-attend-app.component.html',
  styleUrls: ['./exams-attend-app.component.scss']
})
export class ExamsAttendAppComponent implements OnInit, OnDestroy {

  eaData: any;
  finalschedule: string;
  final: string;
  termSchedule: string;
  term: string;
  finalscheduleEn: string;
  finalEn: string;
  termScheduleEn: string;
  termEn: string;
  isLoading = false;


  constructor(private translate: TranslateService, private toastr: AppToasterService, private academicService: ExamsAttendAppService) {
    this.eaData = {
      Term_Exam_With_Schedule: {},
      Term_Exam_Without_Schedule: {},
      Final_Exam_With_Schedule: {},
      Final_Exam_Without_Schedule: {}
    };
    this.eaData["Term_Exam_With_Schedule"]["messages"] = [];
    this.eaData["Term_Exam_Without_Schedule"]["messages"] = [];
    this.eaData["Final_Exam_With_Schedule"]["messages"] = [];
    this.eaData["Final_Exam_Without_Schedule"]["messages"] = [];
  }

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

  getRequests() {
    this.isLoading = true;

    this.academicService.getِExamsAttednace('S180105049').then(
      res => {
        this.eaData = (res as any).data;
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
