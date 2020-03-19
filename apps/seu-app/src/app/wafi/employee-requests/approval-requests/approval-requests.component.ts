import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RequestsDetailsComponent } from '../requests-details/requests-details.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import {ApprovalRequestDetailComponent} from '../approval-request-detail/approval-request-detail.component';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-approval-requests',
  templateUrl: './approval-requests.component.html',
  styleUrls: ['./approval-requests.component.css']
})
export class ApprovalRequestsComponent implements OnInit,OnDestroy {
  
  p: number;
  filter;
  searchTerm: string;
  config: any;
  @Input() groupFilters: Object;
	@Input() searchByKeyword: string;
	users: any[] = [];
	filteredUsers: any[] = [];
  subscription: Subscription;
  subscriptionappreq: Subscription;
  emplistrequestapproval: any;
  constructor(private http: HttpClient, private empreqservice: EmployeeRequestsService, private toastr: AppToasterService, private translate: TranslateService, private dialog: MatDialog) {
  }
  isLoading = true;
  subscriptions;

  ngOnInit() {
    this.getapprovalReqlist();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getapprovalReqlist();
    });

  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }

  getapprovalReqlist() {

    this.isLoading = true
    this.subscriptionappreq = this.empreqservice.getapprovalrequests().subscribe(appreqs => {
      if (appreqs) {
        this.emplistrequestapproval = (appreqs as any).data["requestsToApproveTable"];
        console.log("emp app request",this.emplistrequestapproval);      
        this.isLoading = false;
      } else {

      }
    });

  }

  getappreqdetail(reqSeq:any, reqEmpId:any, reqType:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "75%";
    dialogConfig.data = { reqSeq, reqType,reqEmpId  };
    this.dialog.open(ApprovalRequestDetailComponent, dialogConfig).afterClosed().subscribe(res => {
    });
  }

  // applySearch(filters){
  //   console.log("filters" , filters);
  // }

  
	


}
