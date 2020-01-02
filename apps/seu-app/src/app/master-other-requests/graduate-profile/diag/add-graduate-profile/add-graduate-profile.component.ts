import { Component, OnInit, Inject } from '@angular/core';
import { StudentInfo } from 'src/app/shared/models/student-info';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { GraduateProfileService } from 'src/app/master-other-requests/services/graduate-profile.service';
import { NgForm } from '@angular/forms';
import { StudentData } from 'src/app/shared/models/student-data';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

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

  // isLoading = false;


  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddGraduateProfileComponent>,
    private toastr: AppToasterService, private gradService: GraduateProfileService) { }

  ngOnInit() {
    this.stdinfo = {
      name_ar: '',
      name_en: '',
      mobile: '',
      email: '',
      job_status: '',
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


  }


  addRequest(data: any) {
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
    this.requesting = true;
    this.addRequest(this.stdinfo);

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

}
