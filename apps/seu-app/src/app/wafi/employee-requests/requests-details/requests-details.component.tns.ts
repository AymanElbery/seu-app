import { Component, OnInit, Inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-requests-details',
  templateUrl: './requests-details.component.html',
  styleUrls: ['./requests-details.component.css']
})
export class RequestsDetailsComponent implements OnInit {
  subscription: Subscription;
  reqdetaildata;
  requestApprovalsData;
  requestSeq;
  requestType;
  constructor( private activatedroute: ActivatedRoute,
               private empreqservice: EmployeeRequestsService,
               private toastr: AppToasterService,
               private routerExtensions: RouterExtensions) { }

  isLoading = true;
  ngOnInit() {
   this.activatedroute.params.subscribe(res => {
     console.log(res);
     this.requestSeq = res.param1;
     this.requestType = res.param2;
  }
    );
   this.isLoading = true;
   this.subscription = this.empreqservice.getEmpReqdetail(this.requestSeq, this.requestType).subscribe(reqdetail => {
      if (reqdetail) {
        this.reqdetaildata = (reqdetail as any).data.currentServiceRequestTable;
        this.requestApprovalsData = (reqdetail as any).data.requestApprovalsData;

        // console.log("curent tab data",this.requestApprovalsData);
        this.isLoading = false;
      }
    },
      err => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    );
  }

  goBack() {
    this.routerExtensions.backToPreviousPage();
}

}
