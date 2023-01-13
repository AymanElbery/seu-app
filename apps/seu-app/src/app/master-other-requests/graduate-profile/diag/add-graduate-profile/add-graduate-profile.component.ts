import { Component, OnInit, Inject } from '@angular/core';
import { StudentInfo } from 'src/app/shared/models/student-info';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { GraduateProfileService } from 'src/app/master-other-requests/services/graduate-profile.service';
import { NgForm } from '@angular/forms';
import { StudentData } from 'src/app/shared/models/student-data';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-graduate-profile',
  templateUrl: './add-graduate-profile.component.html',
  styleUrls: ['./add-graduate-profile.component.scss']
})
export class AddGraduateProfileComponent implements OnInit {

  reqData;
  msgs;
  stdinfo: StudentData;
  fileType;
  showDetail = true;
  upgradeflag = false;
  // isLoading = false;
  terms;
  cur_term;


  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddGraduateProfileComponent>,
    private toastr: AppToasterService, private gradService: GraduateProfileService, private translate: TranslateService, ) { 
      this.terms = this.data.terms;
      this.cur_term = this.data.cur_term;
      console.log(this.terms[25].TERM_CODE == this.cur_term);
    }

  ngOnInit() {
    this.stdinfo = {
      name_ar: '',
      name_en: '',
      mobile: '',
      email: '',
      job_status: '',
      gr_term: this.cur_term,
      gr_term_hr: '',
      job_sector: '',
      year_job: '',
      job_com: '',
      job_promo: '',
      job_promo_year: '',
      job_loc: '',
      employer_name: '',
      employer_job_title: '',
      employer_phone: '',
      employer_email: '',
      image: '',
      cv: '',
      STD_RESUME: ''
    };


    // this.isLoading = true;

    this.reqData = this.gradService.reqData;
    this.getworkstatus(this.stdinfo.job_status);
    //console.log("get data",this.reqData);


  }

  getworkstatus(workstatus) {
    // console.log("get data",workstatus);
    if (workstatus = '' || workstatus == "unemployed") {
      this.showDetail = false;
    }
    else {
      this.showDetail = true;
    }

  }
  getupgaredmodel(upgtrademodel) {
    if (upgtrademodel == "yes_promo") {
      this.upgradeflag = true;
    }
    else {
      this.upgradeflag = false;
    }

  }
  addRequest(data: any) {
    this.requesting = true;
    this.gradService.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.gradService.newreqs = true;
        this.dialogRef.close();
      }
      this.requesting = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }
  requesting = false;
  onSubmit(form: NgForm) {
    if (this.requesting) {
      return false;
    }
    if (this.showDetail == true) {
      if (!this.stdinfo.job_sector) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.graduate.job_sector") }]);
        return false;
      }
      if (!this.stdinfo.year_job) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.graduate.year_job") }]);
        return false;
      }
      if (!this.stdinfo.job_com) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.graduate.job_com") }]);
        return false;
      }
      if (!this.stdinfo.job_promo) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.graduate.job_promo") }]);
        return false;
      }
      if (this.upgradeflag == true) {
        if (!this.stdinfo.job_promo_year) {
          this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.graduate.job_promo_year") }]);
          return false;
        }
      }
      if (!this.stdinfo.job_loc) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.graduate.job_loc") }]);
        return false;
      }
      if (!this.stdinfo.employer_name) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.graduate.employer_name") }]);
        return false;
      }
      if (!this.stdinfo.employer_job_title) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.graduate.employer_job_title") }]);
        return false;
      }
      if (!this.stdinfo.employer_phone) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.graduate.employer_phone") }]);
        return false;
      }
      if (!this.stdinfo.employer_email) {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.graduate.employer_email") }]);
        return false;
      }
      if (this.stdinfo.employer_email) {        
        if(this.validateemail(this.stdinfo.employer_email)==false)
        {
          this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.graduate.emilnotallowed") }]);
          return false;
        }
      }

    }
    if (this.stdinfo.email) {     
      if(this.validateemail(this.stdinfo.email)==false)
      {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.graduate.emilnotallowed") }]);
        return false;
      }
    }
    this.addRequest(this.stdinfo);
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  closeDiag() {
    this.dialogRef.close();
  }

  handleInputChange(e, fileType) {
    this.fileType = fileType;
    //console.log('handleInputChange ');
    //console.log(this.fileType);
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /pdf-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    //console.log('_reader ');
    //console.log(this.fileType);
    //console.log(e);

    // tslint:disable-next-line: triple-equals
    if (this.fileType == 'image') {
      this.stdinfo.image = reader.result;
    } else if (this.fileType == 'cv') {
      this.stdinfo.cv = reader.result;
    }


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
