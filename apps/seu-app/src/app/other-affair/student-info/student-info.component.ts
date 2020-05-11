import { Component, OnInit } from '@angular/core';
import { StudentInfo } from 'src/app/shared/models/student-info';
import { StudentInfoService } from '../services/student-info.service';
import { NgForm } from '@angular/forms';
import { StudentInformation } from 'src/app/shared/models/student-information';
import { StudentInformationData } from 'src/app/shared/models/student-information-data';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss'],
  providers: [
    { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' }
  ]
})
export class StudentInfoComponent implements OnInit {
  yearlist;
  reqData;
  msgs;
  cvDownload: string;
  photoDownload: string;
  studentInfo: StudentInformation;
  stdData: StudentInformationData
  isLoading = false;
  fileType;
  showDetail = false;
  constructor(private translate: TranslateService, private academicService: StudentInfoService, private toastr: AppToasterService) { }

  ngOnInit() {
    this.studentInfo =
    {

      NAME_AR: '',
      NAME_EN: '',
      GRADUATION_TERM: '',
      EMAIL: '',
      PHONE: '',
      JOB_STATUS: '',
      JOB_LOCATION: '',
      JOB_TITLE: '',
      JOB_TILE2: '',
      EMAIL2: '',
      PHONE2: '',
      JOB_NAME: '',
      JOB_TYPE: '',
      JOB_TIME: '',
      JOB_YEAR: '',
      WORK_CITY: '',
      PHOTO: '',
      CV: ''
    }

    this.stdData =
    {

      name_ar: '',
      name_en: '',
      graduation_term: '',
      email: '',
      phone: '',
      job_status: '',
      job_location: '',
      job_title: '',
      job_title2: '',
      email2: '',
      phone2: '',
      job_name: '',
      job_type: '',
      job_time: '',
      job_year: '',
      work_city: '',
      photo: '',
      cv: ''
    }
    this.getData();
  }
  getData() {
    this.isLoading = true;
    this.academicService.getِRequests().then(
      res => {
        this.reqData = (res as any).data;
        this.yearlist = (res as any).data["yearslist"];
        this.msgs = (res as any).messages;
        this.studentInfo = this.reqData.user;
        this.stdData.name_ar = this.studentInfo.NAME_AR;
        this.stdData.name_en = this.studentInfo.NAME_EN;
        this.stdData.graduation_term = this.studentInfo.GRADUATION_TERM;
        this.stdData.email = this.studentInfo.EMAIL;
        this.stdData.phone = this.studentInfo.PHONE;
        this.stdData.job_status = this.studentInfo.JOB_STATUS;
        this.stdData.job_location = this.studentInfo.JOB_LOCATION;
        this.stdData.job_title = this.studentInfo['JOB_TILE'];
        this.stdData.job_title2 = this.studentInfo.JOB_TILE2;
        this.stdData.email2 = this.studentInfo.EMAIL2;
        this.stdData.phone2 = this.studentInfo.PHONE2;
        this.stdData.job_name = this.studentInfo.JOB_NAME;
        this.stdData.job_type = this.studentInfo.JOB_TYPE;
        this.stdData.job_time = this.studentInfo.JOB_TIME;
        this.stdData.job_year = this.studentInfo.JOB_YEAR;
        this.stdData.work_city = this.studentInfo.WORK_CITY;
        this.getjobstatus(this.stdData.job_status);
        this.isLoading = false;
      }
    );
    this.cvDownload = this.academicService.DownloadCv();
    this.photoDownload = this.academicService.DownloadPhoto();
  }
  addRequest(data) {
    this.academicService.AddRequest(data).then(res => {
      this.academicService.msgs = (res as any).messages;
      this.msgs = this.academicService.msgs;
      this.toastr.push(this.msgs);
      if (res['status']) {
        this.getData();
      }

    });
  }
  requesting = false;
  onSubmit(form: NgForm) {
    if (this.requesting) {
      return false;
    }
    if (this.showDetail == true) {

      if (!this.stdData.job_type) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.student_info.job_typeReq") }]);
        return false;
      }
      if (!this.stdData.job_time) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.student_info.job_timeReq") }]);
        return false;
      }
      if (!this.stdData.job_year) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.student_info.job_yearReq") }]);
        return false;
      }
      if (!this.stdData.job_location) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.student_info.job_locationReq") }]);
        return false;
      }
      if (!this.stdData.job_title) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.student_info.job_titleReq") }]);
        return false;
      }
      if (!this.stdData.work_city) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.student_info.work_cityReq") }]);
        return false;
      }
      if (!this.stdData.job_name) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.student_info.job_name") }]);
        return false;
      }
      if (!this.stdData.job_title2) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.student_info.job_title2") }]);
        return false;
      }
      if (!this.stdData.phone2) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.student_info.phone2") }]);
        return false;
      }
      if (!this.stdData.email2) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.student_info.email2") }]);
        return false;
      }
     
      if (this.stdData.email2) {
        if(this.validateemail(this.stdData.email2)==false)
        {
          this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.student_info.emilnotallowed") }]);
          return false;
        }
      }
      
    }
    if (this.stdData.email) {
      if(this.validateemail(this.stdData.email)==false)
      {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.student_info.emilnotallowed") }]);
        return false;
      }
    }

   this.addRequest(this.stdData);
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  
  

  getjobstatus(workstatus) {
    //console.log("get data",workstatus);
    if (workstatus == "1") {
      this.showDetail = true;
    }
    else {
      this.showDetail = false;
    }
    // this.isLoading = true


  }

  handleInputChange(e, fileType) {
    this.fileType = fileType;

    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /pdf-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    /*//console.log('_reader ');
    //console.log(this.fileType);
    //console.log(e);*/

    if (this.fileType == 'image')
      this.stdData.photo = reader.result;
    else if (this.fileType == 'cv')
      this.stdData.cv = reader.result;
  }

   
   regex =/^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(seu.edu)\.sa$/g;  
   validateemail(email) {     
    if(this.regex.test(email)) {      
      return false     
    }
    else {         
      return true
    }
  }

}
