import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RequestsDetailsComponent } from '../requests-details/requests-details.component';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { ApprovalHistoryDetailComponent } from '../approval-history-detail/approval-history-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approval-history',
  templateUrl: './approval-history.component.tns.html',
  styleUrls: ['./approval-history.component.tns.css']
})
export class ApprovalHistoryComponent implements OnInit, OnDestroy {
  p: number;
  filter;
  searchTerm: string;
  config: any;
  subscription: Subscription;
  subscriptionappreq: Subscription;
  emplisthistoryapproval: any;
  clicked: any;
  constructor(private http: HttpClient, private empreqservice: EmployeeRequestsService, 
    private toastr: AppToasterService, private translate: TranslateService,private router:Router) {
  }
  isLoading = true;
  subscriptions;

  ngOnInit() {
    this.getapprovalhistorylist();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getapprovalhistorylist();
    });
  }

  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  getapprovalhistorylist() {

    this.isLoading = true
    this.subscriptionappreq = this.empreqservice.getapprovalhistory().subscribe(appreqs => {
      if (appreqs) {
        this.emplisthistoryapproval = (appreqs as any).data["requestsApproveDetailsTable"];
        //console.log("emp app request",this.emplisthistoryapproval);      
        this.isLoading = false;
      }
    },
      err => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    );

  }

  getapphistorydetail(reqSeq: any, reqEmpId: any, reqType: any) {
    console.log(reqSeq,reqEmpId,reqType)
    this.router.navigate(['/requests/approval-history-detail/'+reqSeq+'/'+reqType+'/',reqEmpId])
  }
  clickme(item) {
    this.clicked = item;
  }
  uclickme(item) {
    this.clicked = {};
  }
}
