import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { StudentService } from '../../../../services/student.service';
import { RefundService } from '../../../../services/refund.service';
import { RefundAddComponent } from '../refund-add/refund-add.component';

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

  openDialoge(can_add_new_request) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = can_add_new_request;

    const dialogref = this.dialog.open(RefundAddComponent, dialogConfig);
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
        //this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.reqData.requests.splice(index, 1);
        }
        this.deleting = false;
      }, err => {
        this.toastr.tryagain();
        this.deleting = false;
      });
    }
  }

}
