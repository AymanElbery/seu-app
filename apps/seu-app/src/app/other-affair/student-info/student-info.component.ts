import { Component, OnInit } from '@angular/core';
import { StudentInfo } from 'src/app/shared/models/student-info';
import { StudentInfoService } from '../services/student-info.service';
import { NgForm } from '@angular/forms';
import { StudentInformation } from 'src/app/shared/models/student-information';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  reqData;
  cvDownload: string;
  photoDownload: string;
  studentInfo:StudentInformation;
  isLoading = false;

  constructor(private academicService: StudentInfoService) { }

  ngOnInit() {
    this.isLoading=true;
    this.academicService.getِRequests().then(
      res => {
    this.reqData =    (res as any).data;
    this.isLoading=false;
    //  this.studentInfo.name_ar=this.reqData.user.NAME_AR;
     console.log(this.reqData);
      }
    );
    this.cvDownload =   this.academicService.DownloadCv();
    this.photoDownload = this.academicService.DownloadPhoto();
    
  }
  addRequest(data) {
    this.academicService.AddRequest(data).then(  res => {
      this.academicService.msgs = (res as any).messages;
     
        });
  }
  onSubmit(form: NgForm) {
this.addRequest(form.value);


  }


}
