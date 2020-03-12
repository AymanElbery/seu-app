import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';

@Component({
  selector: 'app-requests-details',
  templateUrl: './requests-details.component.html',
  styleUrls: ['./requests-details.component.css']
})
export class RequestsDetailsComponent implements OnInit {
  subscription: Subscription;
  reqdetaildata;
  requestApprovalsData;
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<RequestsDetailsComponent>, private empreqservice: EmployeeRequestsService) { }

  isLoading = true;
  ngOnInit() {
    this.isLoading = true
    this.subscription = this.empreqservice.getEmpReqdetail(this.data.requestSeq, this.data.requestType).subscribe(reqdetail => {
      if (reqdetail) {
        this.reqdetaildata = (reqdetail as any).data["currentServiceRequestTable"];
        this.requestApprovalsData = (reqdetail as any).data["requestApprovalsData"];

        console.log("curent tab data",this.requestApprovalsData);
        this.isLoading = false;
      } else {

        //this.messages = [];
      }
    });

  }

}
