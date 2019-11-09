import { Component, OnInit } from '@angular/core';
import { StudentInfo } from 'src/app/shared/models/student-info';
import { StudentInfoService } from '../services/student-info.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  reqData;
  cvDownload: string;
  photoDownload: string;
  studentInfo:StudentInfo;
  isLoading = false;

  constructor(private academicService: StudentInfoService) { }

  ngOnInit() {
    this.isLoading=true;
    this.academicService.getِRequests().then(
      res => {
    this.reqData =    (res as any).data;
    this.isLoading=false;
      }
    );
    this.cvDownload =   this.academicService.DownloadCv();
    this.photoDownload = this.academicService.DownloadPhoto();
    
  }


}
