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

  finalScheduleMsgs;
  finalMsgs;
  termScheduleMsgs;
  termMsgs;

  test = {}

  constructor(private academicService: ExamAttendanceService) { }

  ngOnInit() {
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


        console.log(this.test);

        console.log(this.eaData.Term_Exam_With_Schedule.labels);

        console.log(this.termScheduleMsgs);
        console.log(this.termScheduleMsgs.length);
        console.log(this.termMsgs);

        console.log(this.finalScheduleMsgs);
        console.log(this.finalMsgs);*/
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
