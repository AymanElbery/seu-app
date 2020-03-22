import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RequestsDetailsComponent } from '../requests-details/requests-details.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import {ApprovalHistoryDetailComponent} from '../approval-history-detail/approval-history-detail.component';

@Component({
  selector: 'app-approval-history',
  templateUrl: './approval-history.component.html',
  styleUrls: ['./approval-history.component.css']
})
export class ApprovalHistoryComponent implements OnInit,OnDestroy {
  p: number;
  filter;
  searchTerm: string;
  config: any;
  subscription: Subscription;
  subscriptionappreq: Subscription;
  emplisthistoryapproval: any;
  constructor(private http: HttpClient, private empreqservice: EmployeeRequestsService, private toastr: AppToasterService, private translate: TranslateService, private dialog: MatDialog) {
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
  pageChanged(event){
    this.config.currentPage = event;
  }
  getapprovalhistorylist() {

    this.isLoading = true
    this.subscriptionappreq = this.empreqservice.getapprovalhistory().subscribe(appreqs => {
      if (appreqs) {
        this.emplisthistoryapproval = (appreqs as any).data["requestsApproveDetailsTable"];
        //console.log("emp app request",this.emplisthistoryapproval);      
        this.isLoading = false;
      } else {

      }
    });

  }

  getapphistorydetail(reqSeq:any, reqEmpId:any, reqType:any) {
    //console.log("reqSeq",reqSeq,"reqType", reqType,"reqEmpId",reqEmpId);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "75%";
    dialogConfig.data = { reqSeq,reqEmpId, reqType  };
    this.dialog.open(ApprovalHistoryDetailComponent, dialogConfig).afterClosed().subscribe(res => {
    });
  }

}
