import { Component, OnInit, OnDestroy } from '@angular/core';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { PaymentRefundService } from '../services/payment-refund.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NgForm } from '@angular/forms';
import {RefundRequestComponent } from '../master-refund/dialog/refund-request.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-master-refund',
  templateUrl: './master-refund.component.html',
  styleUrls: ['./master-refund.component.css']
})
export class MasterRefundComponent implements OnInit,OnDestroy {
  canaddreq;
  reqData;
  msgs;
  status;
  
  constructor(private translate: TranslateService, public dialog: MatDialog, private toastr: AppToasterService, private refservice: PaymentRefundService) { }
  isLoading = true;
  ngOnInit() {
    
    this.getRequests();
    this.subscribeLangChange();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getRequests();
    });
    
  }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getRequests();
    });
  }

  getRequests() {
    this.isLoading = true;
    this.refservice.getRequest().then(
      res => {
       // console.log("get data",reqData);
        this.refservice.reqData = (res as any).data["reqs"];
        this.canaddreq = (res as any).data["can_add_new_request"];
       // console.log("get data",this.canaddreq,this.refservice.reqData);
        this.refservice.msgs = (res as any).messages;
        this.reqData = this.refservice.reqData;
        this.msgs = this.refservice.msgs;
        this.isLoading = false;
      }, err => {
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    const dialogref = this.dialog.open(RefundRequestComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {   
        this.getRequests();           
    });
  }


  
  deleting = false;
  delete(id, index) {
    //console.log(id);
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      this.refservice.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.reqData.reqs.splice(index, 1);
          this.getRequests();
        }
        this.deleting = false;
      }, err => {
        this.toastr.tryagain();
        this.deleting = false;
      });
    }
  }
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }

}
