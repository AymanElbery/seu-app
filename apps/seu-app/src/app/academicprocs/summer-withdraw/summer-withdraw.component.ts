import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TermPostponeService } from '../services/term-postpone.service';
import { AddPostponeComponent } from '../postpone-request/diag/add-postpone/add-postpone.component';
import { NgForm } from '@angular/forms';
import { SummerWithdrawService } from '../services/summer-withdraw.service';
import { AddSummerWithdrawComponent } from './diag/add-summer-withdraw/add-summer-withdraw.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

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

  constructor(public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: SummerWithdrawService) { }

  ngOnInit() {
    this.isLoading = true;
    this.reason = '';
    this.getRequests();
  }
  getRequests() {
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

    let dialogref = this.dialog.open(AddSummerWithdrawComponent, dialogConfig);
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
      }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }

  }
}
