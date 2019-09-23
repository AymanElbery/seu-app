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


@Component({
  selector: 'app-withdraw-from-univ',
  templateUrl: './withdraw-from-univ.component.html',
  styleUrls: ['./withdraw-from-univ.component.css']
})
export class WithdrawFromUnivComponent implements OnInit {

  printAR;
  withdraw: UnivWithdraw;
  reqData;
  msgs;
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: WithdrawFromUnivService) { }

  ngOnInit() {
    this.withdraw = {FeesForstd: 0, IBAN: '', IBANNAME: '', branch: '', email: '', mobile : null, bankimage : '', BANKID: 0};
    this.acadmicProc.getِgetRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddRequestComponent, dialogConfig);
  }

  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(  res => {
      this.acadmicProc.msgs = (res as any).messages;
        });
  }
  onSubmit(form: NgForm) {
this.addRequest(form.value);


  }

  print(req) {
return    this.acadmicProc.Download(req);

  }
  delete(id, index) {
    if ( confirm('هل انت متأكد')) {
    this.acadmicProc.deleteReq(id).then(res => {
      this.toastr.success('', (res as any).messages.body);

    });
    this.acadmicProc.reqData.reqs.splice(index, 1);

  }

}
call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}


}
