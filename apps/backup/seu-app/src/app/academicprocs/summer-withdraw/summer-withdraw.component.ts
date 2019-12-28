import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TermPostponeService } from '../services/term-postpone.service';
import { AddPostponeComponent } from '../postpone-request/diag/add-postpone/add-postpone.component';
import { NgForm } from '@angular/forms';
import { SummerWithdrawService } from '../services/summer-withdraw.service';
import { AddSummerWithdrawComponent } from './diag/add-summer-withdraw/add-summer-withdraw.component';

@Component({
  selector: 'app-summer-withdraw',
  templateUrl: './summer-withdraw.component.html',
  styleUrls: ['./summer-withdraw.component.css']
})
export class SummerWithdrawComponent implements OnInit {

  printAR;
  reason: string;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog, private toastr: ToastrService, private acadmicProc: SummerWithdrawService) { }

  ngOnInit() {
    this.isLoading = true;
    this.reason = '';
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
        ////console.log(this.reqData.reqs[0].time_to_delete_per_hour);
      }
    );
  }


  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddSummerWithdrawComponent, dialogConfig);
  }

  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.acadmicProc.msgs = (res as any).messages;
    });
  }

  onSubmit(form: NgForm) {

    this.addRequest(form.value);


  }

  print(req) {
    return this.acadmicProc.Download(req);

  }

  delete(id, index) {
    if (confirm('هل انت متأكد')) {
      this.acadmicProc.deleteReq(id).then(res => {
        this.msgs = (res as any).messages;

        this.status = (res as any).status;

        this.msgs.forEach((element: any) => {
          this.toastr.success('', element.body);

        });
        if (this.status == 1)
          this.acadmicProc.reqData.reqs.splice(index, 1);
      });

    }

  }
  deleteReq(id: any) {
    throw new Error('Method not implemented.');
  }

}
