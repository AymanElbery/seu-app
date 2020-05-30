import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { GraduateProfileService } from 'src/app/master-other-requests/services/graduate-profile.service';
import { StudentInfo } from 'src/app/shared/models/student-info';

@Component({
  selector: 'app-graduate-profile-detail',
  templateUrl: './graduate-profile-detail.component.html',
  styleUrls: ['./graduate-profile-detail.component.scss']
})
export class GraduateProfileDetailComponent implements OnInit {


  reqDataDetail;
  msgsDetail;
  stdinfo: StudentInfo;
  STD_NAME_EN;
  isLoading = false;
  STD_PIC_URL = '';
  STD_RESUME_URL = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<GraduateProfileDetailComponent>,
    private toastr: ToastrService, private gradService: GraduateProfileService) { }
  ngOnInit() {

    this.stdinfo = {
      EMPLOYER_EMAIL: '',
      EMPLOYER_JOB_TITLE: '',
      EMPLOYER_NAME: '',
      EMPLOYER_PHONE: '',
      ID: '',
      INSERTDATE: '',
      JOB_COM: '',
      JOB_LOC: '',
      JOB_POSITION: '',
      JOB_PROMO: '',
      JOB_PROMO_YEAR: '',
      JOB_SECTOR: '',
      JOB_STATUS: '',
      JOB_TIT: '',
      MOBILE_NUM: '',
      PERSONAL_EMAIL: '',
      PROGRAM_TYPE: '',
      STD_CAMP: '',
      STD_EMAIL: '',
      STD_GENDER: '',
      STD_GPA: '',
      STD_ID: '',
      STD_MAJOR_CODE: '',
      STD_MAJOR_DESC: '',
      STD_NAME_AR: '',
      STD_NAME_EN: '',
      STD_NATIONALITY: '',
      STD_PIC: '',
      STD_RESUME: '',
      SUBMIT_NO: '',
      YEAR_JOB: ''

    }
    this.isLoading = true;

    this.gradService.getDetails().then(
      res => {
        this.gradService.reqDataDetail = (res as any).data;
        this.gradService.msgsDetail = (res as any).messages;
        this.reqDataDetail = this.gradService.reqDataDetail;
        this.msgsDetail = this.gradService.msgsDetail;
        this.stdinfo = this.reqDataDetail.stdinfo[0];
        this.stdinfo.JOB_LOC = this.reqDataDetail.locations[0]['NAME_AR'];
        this.STD_PIC_URL = this.reqDataDetail.stdinfo[0]['STD_PIC_URL'];
        this.STD_RESUME_URL = this.reqDataDetail.stdinfo[0]['STD_RESUME_URL'];
        if (this.stdinfo.STD_GENDER == 'M')
          this.stdinfo.STD_GENDER = 'ذكر'
        else if (this.stdinfo.STD_GENDER == 'F')
          this.stdinfo.STD_GENDER = 'أنثي'
        // //console.log(this.stdinfo);
        this.isLoading = false;

      }
    );


  }

  /* onSubmit(form: NgForm) {
     this.addRequest(this.cancelCousre);
     this.dialogRef.close();
 
   }*/
  closeDiag() {
    this.dialogRef.close();
  }

}
