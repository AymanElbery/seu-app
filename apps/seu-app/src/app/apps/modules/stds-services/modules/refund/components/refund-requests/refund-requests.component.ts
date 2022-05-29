import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { StudentService } from '../../../../services/student.service';
import { RefundService } from '../../../../services/refund.service';
import { RefundAddComponent } from '../refund-add/refund-add.component';
import { RefundContinueComponent } from '../refund-continue/refund-continue.component';
import { RefundReasonComponent } from '../refund-reason/refund-reason.component';

@Component({
  selector: 'app-refund-requests',
  templateUrl: './refund-requests.component.html',
  styleUrls: ['./refund-requests.component.css']
})
export class RefundRequestsComponent implements OnInit {
  msgs;
  status;
  isLoading = false;
  reqData;
  std_id;
  name;
  col;
  major;
  deleting = false;

  constructor(
    private service: RefundService,
    private userService: StudentService,
    private toastr: AppToasterService,
    public dialog: MatDialog,
    private translate: TranslateService
  ) { 
    this.std_id = this.userService.LoggedInUser.STD_ID;
    this.name = this.userService.LoggedInUser.FULL_NAME_AR;
    this.col = this.userService.LoggedInUser.COLL_DESC;
    this.major = this.userService.LoggedInUser.MAJOR_DESC;
    this.getRequests();
  }

  ngOnInit() {
    
  }

  getRequests() {
    this.isLoading = true;
    this.service.getRequests().subscribe(
      res => {
        this.reqData = (res as any).data;
        this.msgs = (res as any).messages;
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

    const dialogref = this.dialog.open(RefundAddComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getRequests();
      }
    });
  }

  openContinueDialoge(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = id;

    const dialogref = this.dialog.open(RefundContinueComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getRequests();
      }
    });
  }

  openReasonDialoge(reason) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = reason;

    const dialogref = this.dialog.open(RefundReasonComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getRequests();
      }
    });
  }

  delete(id, index) {
    if (confirm(this.translate.instant('refund.delete_confirm'))) {
      this.deleting = true;
      this.service.deleteReq(id).subscribe(res => {
        if ((res as any).status == 1) {
          this.getRequests();
        }
        this.deleting = false;
      }, err => {
        this.toastr.tryagain();
        this.deleting = false;
      });
    }
  }

}
