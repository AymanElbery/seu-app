import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { changeBranch } from 'src/app/shared/models/change-branch';
import { ChangeBranchService } from '../services/change-branch.service';
import { AddChangeBranchComponent } from './diag/add-change-branch/add-change-branch.component';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-branch',
  templateUrl: './change-branch.component.html',
  styleUrls: ['./change-branch.component.scss']
})
export class ChangeBranchComponent implements OnInit {

  printAR;
  changeBranch: changeBranch;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(private translate: TranslateService, public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: ChangeBranchService) { }

  ngOnInit() {
    this.changeBranch = { camp: "", reason: "", mobile: "" };
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
        //console.log(this.reqData);
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

    let dialogref = this.dialog.open(AddChangeBranchComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.acadmicProc.newreqs) {
        this.getRequests();
        this.acadmicProc.newreqs = false;
      }
    });
  }

  deleting = false;
  delete(id, index) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
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

