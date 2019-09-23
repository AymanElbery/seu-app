import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { WithdrawFromUnivService } from '../services/withdraw-from-univ.service';
import { AddRequestComponent } from '../withdraw-from-univ/diag/add-request/add-request.component';
import { NgForm } from '@angular/forms';
import { TermPostponeService } from '../services/term-postpone.service';
import { AddPostponeComponent } from './diag/add-postpone/add-postpone.component';

@Component({
  selector: 'app-postpone-request',
  templateUrl: './postpone-request.component.html',
  styleUrls: ['./postpone-request.component.css']
})
export class PostponeRequestComponent implements OnInit {

  printAR;
  reason: string;
  reqData;
  msgs;
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: TermPostponeService) { }

  ngOnInit() {
this.reason = '';
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

    this.dialog.open(AddPostponeComponent, dialogConfig);
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

}
