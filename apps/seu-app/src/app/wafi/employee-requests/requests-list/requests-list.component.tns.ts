import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppToasterService } from '../../../shared/services/app-toaster';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient,
              private empreqservice: EmployeeRequestsService,
              private toastr: AppToasterService,
              private translate: TranslateService
              ) {
  }
  subscription: Subscription;
  subscriptiondelreq: Subscription;
  emplistrequest: any;
  isLoading = true;
  subscriptions;
  p: number;
  config: any;
  clicked: any;

  deleting = false;

  ngOnInit() {
    this.getReqlist();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getReqlist();
    });

  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  getReqlist() {

    this.isLoading = true;
    this.subscription = this.empreqservice.getEmpReqLists().subscribe(empreqs => {
      if (empreqs) {
        this.emplistrequest = (empreqs as any).data;
        console.log('data');
        console.log(this.emplistrequest);
        //// console.log("emp request",this.emplistrequest);
        this.isLoading = false;
      }
    },
      err => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    );

  }
  clickme(item) {
    this.clicked = item;
  }
  uclickme(item) {
    this.clicked = {};
  }

  getreqdetail(orderItemIndex, requestSeq, requestType) {




  }
  delete(requestSeq: any, requestType: any) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      this.subscriptiondelreq = this.empreqservice.deletetEmpRequest(requestSeq, requestType).subscribe(empreqsdel => {
        // console.log(empreqsdel);
        // this.toastr.push((empreqsdel as any).statusDesc);
        this.deleting = false;
        this.getReqlist();
      },
        err => {
          this.toastr.tryagain();
          this.deleting = false;
        });

    }
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
