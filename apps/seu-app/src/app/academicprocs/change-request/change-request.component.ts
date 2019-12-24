import { Component, OnInit } from '@angular/core';
//import { changeRequest } from 'src/app/shared/models/cancel-cousre';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ChangeRequestService } from '../services/change-request.service';
import { ChangeRequest } from 'src/app/shared/models/change-request';
import { AddRequestChangeComponent } from './diag/add-request-change/add-request-change.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
@Component({
  selector: 'app-change-request',
  templateUrl: './change-request.component.html',
  styleUrls: ['./change-request.component.scss']
})
export class ChangeRequestComponent implements OnInit {

  //printAR;
  //changeRequest: ChangeRequest;
  reqData;
  msgs;
  status;
  isLoading = false;

  //canAdd:boolean;
  constructor(public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: ChangeRequestService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getRequests();
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
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    let dialogref = this.dialog.open(AddRequestChangeComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.acadmicProc.newreqs) {
        this.getRequests();
        this.acadmicProc.newreqs = false;
      }
    });
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