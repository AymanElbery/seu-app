import { Component, OnInit } from '@angular/core';
import { AcademicStatusService } from '../services/academic-status.service';

@Component({
  selector: 'app-academic-status',
  templateUrl: './academic-status.component.html',
  styleUrls: ['./academic-status.component.css']
})
export class AcademicStatusComponent implements OnInit {

  student;
  studentTerms;
  studentTermDetails;
  selectedSems;
  arabicPrint: string;
  EngPrint: string;


  constructor(private academicStatusService: AcademicStatusService) { }

  ngOnInit() {
    this.arabicPrint = this.academicStatusService.DownloadStatus();
    this.EngPrint = this.academicStatusService.DownloadEngStatus();
    this.academicStatusService.getStaudentStatus().then((res) => {
      this.student = (res as any).data.student;
      this.studentTerms = (res as any).data.STD_TERMS;
      this.studentTermDetails = (res as any).data.STD_TermDetails;
      console.log(this.studentTermDetails);
    } );
  }

  getTrmsDetails(val) {

     this.academicStatusService.getStaudentTermDetails( parseInt(val, 10)).then(
      (res) => {
      this.studentTermDetails = (res as any).data.STD_TermDetails;
      }
     );
  }


  downlaodFile() {
    window.open('http://seuapps.seu.edu.sa/stdservicesapi/academic_status/academic_status_print', 'MsgWindow', 'width=200,height=100');

  }
}
