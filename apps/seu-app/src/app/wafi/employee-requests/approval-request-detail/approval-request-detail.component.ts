import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approval-request-detail',
  templateUrl: './approval-request-detail.component.html',
  styleUrls: ['./approval-request-detail.component.css']
})
export class ApprovalRequestDetailComponent implements OnInit {

  subscription: Subscription;
  appreqdetails: any;
  rejectionitmes: any;
  AddReqForm: FormGroup;
  submitted = false;
  vacationreqtype: any;
  fileToUpload: File = null;
  disclaimerReasonItems;


  subscriptionDDLReqtype: Subscription;
  subscriptionvac: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<ApprovalRequestDetailComponent>, private router: ActivatedRoute, private translate: TranslateService, private toastr: AppToasterService, private fb: FormBuilder, private empreqservice: EmployeeRequestsService) {
    this.AddReqForm = fb.group({
      'rejectReason': ['', [Validators.required]],
    });
  }


  isLoading = true;
  ngOnInit() {
    this.isLoading = true;
    this.subscription = this.empreqservice.getapprovalreqDetail(this.data.reqSeq, this.data.reqType, this.data.reqEmpId).subscribe(appreqdetail => {
      if (appreqdetail) {
        this.rejectionitmes = (appreqdetail as any).data["rejectReasoneItems"];
        this.appreqdetails = (appreqdetail as any).data["currentServiceRequestTable"];
        //console.log("Detail data",this.appreqdetails);
        this.isLoading = false;
      }
    },
      err => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    );

  }
  get f() { return this.AddReqForm.controls; }

  submitapporve(approveValue: any) {
    //this.submitted = true;
    this.saveapprovaldata(' ', approveValue);
  }

  onFormSubmit(event) {
    this.submitted = true;
    const submitdatavalue = (this.AddReqForm.value);
    if (this.AddReqForm.invalid) {
      return;
    }

    //console.log("submit data", submitdatavalue);

    this.saveapprovaldata(submitdatavalue.rejectReason, 0);

    // this.formSubmitted = true;
    if (this.AddReqForm.invalid) {
      return;
    }

  }

  saveapprovaldata(rejectReasonNo: any, approveValue: any) {

    this.empreqservice.submitapproverequest(this.data.reqSeq, this.data.reqEmpId, this.data.reqType, rejectReasonNo, approveValue).subscribe(saveappovedata => {
      ////console.log("saved data", leavdedcut);
      if (!saveappovedata['accepted']) {
        var error = (saveappovedata as any).data["errorMessage"]
        //console.log("response data",error);
        this.toastr.push([{ type: 'error', 'body': error }]);

      } else {
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('wafi.request_saved') }]);
        //this.router.navigate(['/wafi/employee-requests'])
      }
    }
    );
  }

  FillDDLReqType(reqtypeid: any) {
    this.isLoading = true
    //this.AddReqForm.controls['requestType'].setValue(this.id);
    this.subscriptionDDLReqtype = this.empreqservice.getDDLVacationType(reqtypeid).subscribe(reqtype => {
      if (reqtype) {

        this.disclaimerReasonItems = (reqtype as any).data["disclaimerReasonItems"];
        //console.log("vac item data", this.vacationreqtype);
        this.isLoading = false
      } else {
      }
    });
  }

}
