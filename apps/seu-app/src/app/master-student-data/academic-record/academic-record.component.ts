import { Component, OnInit } from '@angular/core';
import { AcademicRecordService } from '../services/academic-record.service';

@Component({
  selector: 'app-academic-record',
  templateUrl: './academic-record.component.html',
  styleUrls: ['./academic-record.component.css']
})
export class AcademicRecordComponent implements OnInit {

  recoredData;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  constructor(private academicService: AcademicRecordService) { }

  ngOnInit() {

     this.isLoading = true;
     this.academicService.getRecord().then(
      res => {
        console.log(res);
        this.recoredData =    (res as any).data;
        this.isLoading = false;
      }
    );
     this.arabicPrint =   this.academicService.Download();
     this.EngPrint = this.academicService.DownloadEng();
  }

}
