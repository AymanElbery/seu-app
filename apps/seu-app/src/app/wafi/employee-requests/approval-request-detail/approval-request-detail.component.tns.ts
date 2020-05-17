import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AppToasterService } from '../../../shared/services/app-toaster';
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
  reqSeq: any;
  reqType: any;
  reqEmpId: any;

  constructor(private router: ActivatedRoute,
              private translate: TranslateService,
              private toastr: AppToasterService,
              private empreqservice: EmployeeRequestsService) {}


  isLoading = true;
  ngOnInit() {
    this.isLoading = true;
    this.router.params.subscribe(res => {
      this.reqSeq = res.sq;
      this.reqType = res.type;
      this.reqEmpId = res.empId;

    });
    console.log('param');
    console.log(this.reqSeq);
    console.log(this.reqEmpId);
    this.subscription = this.empreqservice.getapprovalreqDetail(this.reqSeq, this.reqType, this.reqEmpId).subscribe(appreqdetail => {
      if (appreqdetail) {
        console.log('type');
       
        this.rejectionitmes = (appreqdetail as any).data.rejectReasoneItems;
        this.appreqdetails = (appreqdetail as any).data.currentServiceRequestTable;
        console.log(this.appreqdetails);
        // console.log("Detail data",this.appreqdetails);
        this.isLoading = false;
      }
    },
      err => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    );

  }

  submitapporve(approveValue: any) {
    // this.submitted = true;
    this.saveapprovaldata(' ', approveValue);
  }



  saveapprovaldata(rejectReasonNo: any, approveValue: any) {
    this.submitted = true;
    this.empreqservice.submitapproverequest(this.reqSeq, this.reqType,
      this.reqEmpId, rejectReasonNo, approveValue).subscribe(saveappovedata => {
      //// console.log("saved data", leavdedcut);
      if ((!saveappovedata as any).data.accepted) {
        const error = (saveappovedata as any).data.errorMessage;
        // console.log("response data",error);
        this.toastr.push([{ type: 'error', body: error }]);

      } else {
        this.toastr.push([{ type: 'success', body: this.translate.instant('general.request_saved') }]);
        this.empreqservice.refreshAfterClose = true;
        // this.router.navigate(['/wafi/employee-requests'])
      }
      this.submitted = false;
    }, err => {
      this.toastr.tryagain();
      this.submitted = false;
    }
    );
  }

  FillDDLReqType(reqtypeid: any) {
    this.isLoading = true;
    // this.AddReqForm.controls['requestType'].setValue(this.id);
    this.subscriptionDDLReqtype = this.empreqservice.getDDLVacationType(reqtypeid).subscribe(reqtype => {
      if (reqtype) {

        this.disclaimerReasonItems = (reqtype as any).data.disclaimerReasonItems;
        // console.log("vac item data", this.vacationreqtype);
        this.isLoading = false;
      } else {
      }
    });
  }

}
