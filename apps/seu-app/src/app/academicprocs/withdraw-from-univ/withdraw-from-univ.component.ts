import { Component, OnInit } from '@angular/core';
import { WithdrawFromUnivService } from '../services/withdraw-from-univ.service';
import { UnivWithdraw } from 'src/app/shared/models/univ-withdraw';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddRequestComponent } from './diag/add-request/add-request.component';
import { ToastrService } from 'ngx-toastr';
import { DOCUMENT } from '@angular/common';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { HttpRequest } from '@angular/common/http';
import { AppToasterService } from 'src/app/shared/services/app-toaster';


@Component({
  selector: 'app-withdraw-from-univ',
  templateUrl: './withdraw-from-univ.component.html',
  styleUrls: ['./withdraw-from-univ.component.scss']
})
export class WithdrawFromUnivComponent implements OnInit {

  printAR;
  withdraw: UnivWithdraw;
  reqData;
  msgs;
  status;
  constructor(public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: WithdrawFromUnivService) { }

  ngOnInit() {
    this.isLoading = true;
    this.withdraw = { FeesForstd: 0, IBAN: '', IBANNAME: '', branch: '', email: '', mobile: null, bankimage: '', BANKID: 0 };
    this.getRequests();
  }

  isLoading = false;
  getRequests() {
    this.isLoading = true;
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
      }, err => {
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.direction = "rtl";

    let dialogref = this.dialog.open(AddRequestComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.acadmicProc.newreqs) {
        this.getRequests();
        this.acadmicProc.newreqs = false;
      }
    });
  }

  print(req) {
    return this.acadmicProc.Download(req);

  }
  deleting = false;
  delete(id, index) {
    if (confirm('هل انت متأكد؟')) {
      this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.reqData.reqs.splice(index, 1);
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
