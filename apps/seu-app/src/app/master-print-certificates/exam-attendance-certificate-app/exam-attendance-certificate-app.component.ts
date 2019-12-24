import { Component, OnInit } from '@angular/core';
import { ExamAttendanceCertificateAppService } from '../services/exam-attendance-certificate-app.service';

@Component({
  selector: 'app-exam-attendance-certificate-app',
  templateUrl: './exam-attendance-certificate-app.component.html',
  styleUrls: ['./exam-attendance-certificate-app.component.scss']
})
export class ExamAttendanceCertificateAppComponent implements OnInit {

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
  constructor(private printCertificate: ExamAttendanceCertificateAppService) { }

  ngOnInit() {
    this.isLoading = true;
    this.printCertificate.getRequest().then
      (res => {
        this.printCertificate.reqData = (res as any).data;
        this.printCertificate.msgs = (res as any).messages;
        this.reqData = this.printCertificate.reqData;
        this.msgs = this.printCertificate.msgs;
        this.isLoading = false;
        //console.log(this.reqData);
      });

      this.arabicPrintTermWithSchedule=this.printCertificate.Download("Term_Exam_With_Schedule");
      this.EngPrintTermWithSchedule=this.printCertificate.DownloadEng("Term_Exam_With_Schedule");
  
      this.arabicPrintTermWithoutSchedule=this.printCertificate.Download("Term_Exam_Without_Schedule");
      this.EngPrintTermWithoutSchedule=this.printCertificate.DownloadEng("Term_Exam_Without_Schedule");
  
      this.arabicPrintFinalWithSchedule=this.printCertificate.Download("Final_Exam_With_Schedule");
      this.EngPrintFinalWithSchedule=this.printCertificate.DownloadEng("Final_Exam_With_Schedule");
  
      this.arabicPrintFinalWithoutSchedule=this.printCertificate.Download("Final_Exam_Without_Schedule");
      this.EngPrintFinalWithoutSchedule=this.printCertificate.DownloadEng("Final_Exam_Without_Schedule");

  }
}
