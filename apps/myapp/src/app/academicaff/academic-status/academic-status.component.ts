import { Component, OnInit } from '@angular/core';
import { AcademicStatusService } from '../services/academic-status.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-academic-status',
  templateUrl: './academic-status.component.html',
  styleUrls: ['./academic-status.component.scss']
})
export class AcademicStatusComponent implements OnInit {

  student;
  studentTerms;
  studentTermDetails;
  selectedSems;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  isLoadingTerm = false;


  constructor(private academicStatusService: AcademicStatusService) { }

  ngOnInit() {

    this.isLoading = true;
    this.isLoadingTerm = true;
    this.academicStatusService.getStaudentStatus().then((res) => {
      this.student = (res as any).data.student;
      this.studentTerms = (res as any).data.STD_TERMS;
      this.studentTermDetails = (res as any).data.STD_TermDetails;
      ////console.log(this.studentTermDetails);
      this.selectedSems = this.studentTerms[0].TERM_CODE;
      this.arabicPrint = this.academicStatusService.DownloadStatus(this.selectedSems);
      this.EngPrint = this.academicStatusService.DownloadEngStatus(this.selectedSems);
      this.isLoading = false;
      this.isLoadingTerm = false;
    });
  }

  getTrmsDetails(val) {

    this.isLoadingTerm = true;
    this.arabicPrint = this.academicStatusService.DownloadStatus(this.selectedSems);
    this.EngPrint = this.academicStatusService.DownloadEngStatus(this.selectedSems);
    
    this.academicStatusService.getStaudentTermDetails(parseInt(val, 10)).then(
      (res) => {
        this.studentTermDetails = (res as any).data.STD_TermDetails;
        this.isLoadingTerm = false;

      }
    );
  }


  downlaodFile() {
    window.open('http://seuapps.seu.edu.sa/stdservicesapi/academic_status/academic_status_print', 'MsgWindow', 'width=200,height=100');

  }
}
