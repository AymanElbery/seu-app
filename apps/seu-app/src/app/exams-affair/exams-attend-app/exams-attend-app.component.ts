import { Component, OnInit } from '@angular/core';
import { ExamsAttendAppService } from '../services/exams-attend-app.service';

@Component({
  selector: 'app-exams-attend-app',
  templateUrl: './exams-attend-app.component.html',
  styleUrls: ['./exams-attend-app.component.css']
})
export class ExamsAttendAppComponent implements OnInit {

  eaData;
  finalschedule: string;
  final: string;
  termSchedule: string;
  term: string;
  finalscheduleEn: string;
  finalEn: string;
  termScheduleEn: string;
  termEn: string;

  constructor(private academicService: ExamsAttendAppService) { }

  ngOnInit() {
    this.academicService.getِExamsAttednace('S180105049').then(
      res => {
    this.eaData =    (res as any).data;
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

}
