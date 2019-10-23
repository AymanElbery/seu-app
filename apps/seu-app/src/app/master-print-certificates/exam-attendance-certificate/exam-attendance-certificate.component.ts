import { Component, OnInit } from '@angular/core';
import {ExamAttendanceCertificateService} from '../services/exam-attendance-certificate.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-exam-attendance-certificate',
  templateUrl: './exam-attendance-certificate.component.html',
  styleUrls: ['./exam-attendance-certificate.component.css']
})
export class ExamAttendanceCertificateComponent implements OnInit {

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
  constructor( private stdData:ExamAttendanceCertificateService) { }

  ngOnInit() {
       this.isLoading=true;
       this.stdData.getRequest().then
       (res=>{
       this.stdData.reqData=(res as any).data;
       this.stdData.msgs=(res as any).messages;
       this.reqData=this.stdData.reqData;
       this.msgs=this.stdData.msgs;
       this.isLoading=false;
        console.log(this.reqData);


    });
    this.arabicPrintTermWithSchedule=this.stdData.Download("Term_Exam_With_Schedule");
    this.EngPrintTermWithSchedule=this.stdData.DownloadEng("Term_Exam_With_Schedule");

    this.arabicPrintTermWithoutSchedule=this.stdData.Download("Term_Exam_Without_Schedule");
    this.EngPrintTermWithoutSchedule=this.stdData.DownloadEng("Term_Exam_Without_Schedule");

    this.arabicPrintFinalWithSchedule=this.stdData.Download("Final_Exam_With_Schedule");
    this.EngPrintFinalWithSchedule=this.stdData.DownloadEng("Final_Exam_With_Schedule");

    this.arabicPrintFinalWithoutSchedule=this.stdData.Download("Final_Exam_Without_Schedule");
    this.EngPrintFinalWithoutSchedule=this.stdData.DownloadEng("Final_Exam_Without_Schedule");



  }
 
   

  
}
