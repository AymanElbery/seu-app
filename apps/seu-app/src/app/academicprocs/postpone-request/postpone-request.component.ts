import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { WithdrawFromUnivService } from '../services/withdraw-from-univ.service';
import { AddRequestComponent } from '../withdraw-from-univ/diag/add-request/add-request.component';
import { NgForm } from '@angular/forms';
import { TermPostponeService } from '../services/term-postpone.service';
import { AddPostponeComponent } from './diag/add-postpone/add-postpone.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

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
  status;

  constructor(public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: TermPostponeService) { }

  ngOnInit() {
    this.isLoading = true;
    this.reason = '';
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
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    let dialogref = this.dialog.open(AddPostponeComponent, dialogConfig);
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
