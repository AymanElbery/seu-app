import { Component, OnInit } from '@angular/core';
import { ExamAttendanceService } from '../services/exam-attendance.service';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-exams-attend-stat',
  templateUrl: './exams-attend-stat.component.html',
  styleUrls: ['./exams-attend-stat.component.css']
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

  constructor(private academicService: ExamAttendanceService) { }

  ngOnInit() {
    this.isLoading = true;
    this.academicService.getِExamsAttednace('S180105049').then(
      res => {
    this.eaData =    (res as any).data;
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
}
