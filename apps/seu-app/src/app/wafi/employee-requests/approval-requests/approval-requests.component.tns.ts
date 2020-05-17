import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RequestsDetailsComponent } from '../requests-details/requests-details.component';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { ApprovalRequestDetailComponent } from '../approval-request-detail/approval-request-detail.component';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
@Component({
  selector: 'app-approval-requests',
  templateUrl: './approval-requests.component.html',
  styleUrls: ['./approval-requests.component.css']
})
export class ApprovalRequestsComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient,
              private empreqservice: EmployeeRequestsService,
              private toastr: AppToasterService,
              private translate: TranslateService,
              private router: Router) {
  }

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
  clicked: any;
  isLoading = true;
  subscriptions;
  list: [];

  ngOnInit() {
    this.getapprovalReqlist();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getapprovalReqlist();
    });

  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  getapprovalReqlist() {

    this.isLoading = true;
    this.subscriptionappreq = this.empreqservice.getapprovalrequests().subscribe(appreqs => {
      if (appreqs) {
        this.emplistrequestapproval = (appreqs as any).data.requestsToApproveTable;
        this.isLoading = false;
        this.list = [];
        (this.emplistrequestapproval as []).forEach(e => this.list.push(e));
      }
    },
      err => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    );
  }
  search() {
    console.log('f');
    console.log(this.filter);
    this.emplistrequestapproval=[];
    this.list.forEach(e => (this.emplistrequestapproval as []).push(e));
    if (!this.filter || this.filter == '' ) {
      console.log('1');
      console.log(this.emplistrequestapproval);
      return;
    }
    console.log('2');
    console.log(this.emplistrequestapproval);

    this.emplistrequestapproval =  (this.emplistrequestapproval as []).filter(r => ((r as any).requestSeq == this.filter ||
    ((r as any).requestEmpName + '').includes( this.filter)));
  }
  getappreqdetail(reqSeq: any, reqEmpId: any, reqType: any) {
  this.router.navigate(['requests/approval-details', reqSeq, reqType,reqEmpId ]);

  }
  onBlur(e) {
    console.log(e);
  }
  clickme(item) {
    this.clicked = item;
  }
  uclickme(item) {
    this.clicked = {};
  }
  // applySearch(filters){
  //   //console.log("filters" , filters);
  // }





}
