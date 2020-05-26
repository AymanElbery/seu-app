import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-approval-history-detail',
  templateUrl: './approval-history-detail.component.tns.html',
  styleUrls: ['./approval-history-detail.component.tns.css']
})
export class ApprovalHistoryDetailComponent implements OnInit {

  subscription: Subscription;
  appreqdetails: any;
  rejectionitmes: any;
  AddReqForm: FormGroup;
  submitted = false;
  vacationreqtype: any;
  fileToUpload: File = null;
  disclaimerReasonItems;
  currentServiceRequestTable: any=null;
  transactionData: any;



  subscriptionDDLReqtype: Subscription;
  subscriptionvac: Subscription;

  constructor(private router: ActivatedRoute, private translate: TranslateService, private toastr: AppToasterService, 
    private empreqservice: EmployeeRequestsService,private routerExtensions:RouterExtensions) {
   //   'rejectReason': ['', [Validators.required]],
  }


  isLoading = true;
  ngOnInit() {
    //console.log("details",this.data.reqSeq,this.data.reqEmpId,this.data.reqType);
    this.isLoading = true;
    this.subscription = this.empreqservice.getapprovalhistoryDetail(this.router.snapshot.paramMap.get('sq')
    ,this.router.snapshot.paramMap.get('type'), this.router.snapshot.paramMap.get('empId')).subscribe(apphistorydetail => {
      if (apphistorydetail) {
        this.currentServiceRequestTable = (apphistorydetail as any).data != null ?(apphistorydetail as any).data["currentServiceRequestTable"]:null;
        this.transactionData = (apphistorydetail as any).data != null ?(apphistorydetail as any).data["transactionData"]:null;
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

  onFormSubmit(event) {
    this.submitted = true;
    const submitdatavalue = (this.AddReqForm.value);
    if (this.AddReqForm.invalid) {
      return;
    }

    //console.log("submit data", submitdatavalue);

    this.empreqservice.submitreqserviceleavededuction(submitdatavalue).subscribe(leavdedcut => {
      ////console.log("saved data", leavdedcut);
      if (!leavdedcut['saveRequest']) {
        var error = (leavdedcut as any).data["errorMassege"]
        //console.log("response data",error);
        this.toastr.push([{ type: 'error', 'body': error }]);

      } else {
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('wafi.request_saved') }]);
        //this.router.navigate(['/wafi/employee-requests'])
      }
    }
    );

  }

  goBack() {
    this.routerExtensions.backToPreviousPage();
}

}

