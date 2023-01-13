import { Component, OnInit, OnDestroy } from '@angular/core';
import { WithdrawFromUnivService } from '../services/withdraw-from-univ.service';
import { UnivWithdraw } from 'src/app/shared/models/univ-withdraw';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddRequestComponent } from './diag/add-request/add-request.component';
import { ToastrService } from 'ngx-toastr';
import { DOCUMENT } from '@angular/common';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-withdraw-from-univ',
  templateUrl: './withdraw-from-univ.component.html',
  styleUrls: ['./withdraw-from-univ.component.scss']
})
export class WithdrawFromUnivComponent implements OnInit, OnDestroy {
  constructor(private translate: TranslateService,
    public dialog: MatDialog,
    private toastr: AppToasterService,
    private acadmicProc: WithdrawFromUnivService) { }

  printAR;
  withdraw: UnivWithdraw;
  reqData;
  msgs;
  status;

  isLoading = false;
  deleting = false;

  ngOnInit() {
    this.isLoading = true;
    this.withdraw = { FeesForstd: 0, IBAN: '', IBANNAME: '', branch: '', email: '', mobile: null, bankimage: '', BANKID: 0 };
    this.getRequests();
    this.subscribeLangChange();
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
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.direction = 'rtl';

    const dialogref = this.dialog.open(AddRequestComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.acadmicProc.newreqs) {
        this.getRequests();
        this.acadmicProc.newreqs = false;
      }
    });
  }

  print(req) {
    return this.acadmicProc.print(req);
  }
  download(req) {
    return this.acadmicProc.download(req);
  }
  delete(id, index) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        // tslint:disable-next-line: triple-equals
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
