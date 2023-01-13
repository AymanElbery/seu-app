import { Component, OnInit, Inject } from '@angular/core';
import { GraduateProfileService } from '../../../../master-other-requests/services/graduate-profile.service';
import { StudentInfo } from '../../../../shared/models/student-info';
import { ModalDialogParams } from 'nativescript-angular/common';

@Component({
  selector: 'app-graduate-profile-detail',
  templateUrl: './graduate-profile-detail.component.tns.html',
  styleUrls: ['./graduate-profile-detail.component.tns.scss']
})
export class GraduateProfileDetailComponent implements OnInit {


  reqDataDetail={"stdinfo":[]};
  msgsDetail;
  stdinfo: StudentInfo;
  STD_NAME_EN;
  isLoading = false;


  constructor(private _params: ModalDialogParams,
              private gradService: GraduateProfileService) { }
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

    };
    this.isLoading = true;

    this.gradService.getDetails().then(
      res => {
        this.gradService.reqDataDetail = (res as any).data;
        this.gradService.msgsDetail = (res as any).messages;
        this.reqDataDetail = this.gradService.reqDataDetail;
        this.msgsDetail = this.gradService.msgsDetail;
        this.stdinfo = this.reqDataDetail.stdinfo[0];
        if (this.stdinfo.STD_GENDER == 'M') {
          this.stdinfo.STD_GENDER = 'ذكر';
        } else if (this.stdinfo.STD_GENDER == 'F') {
          this.stdinfo.STD_GENDER = 'أنثي';
             }
        // //console.log(this.stdinfo);
        this.isLoading = false;

      }
    );


  }

  closeDiag() {
    this._params.closeCallback();
  }

}
