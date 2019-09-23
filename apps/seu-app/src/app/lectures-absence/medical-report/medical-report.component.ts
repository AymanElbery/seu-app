import { Component, OnInit } from '@angular/core';
import { MedicalReportService } from '../services/medical-report.service';

@Component({
  selector: 'app-medical-report',
  templateUrl: './medical-report.component.html',
  styleUrls: ['./medical-report.component.css']
})
export class MedicalReportComponent implements OnInit {

  mrData;
  arabicPrint: string;
  EngPrint: string;
  constructor(private academicService: MedicalReportService) { }

  ngOnInit() {
    this.academicService.getِMedicalReport().then(
      res => {
    this.mrData =    (res as any).data;
      }
    );
    this.arabicPrint =   this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();
  }

}
