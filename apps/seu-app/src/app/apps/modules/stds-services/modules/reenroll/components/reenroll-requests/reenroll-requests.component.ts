import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { ReenrollService } from '../../../../services/reenroll.service';
import { ReEnrollAddComponent } from './../reenroll-add/reenroll-add.component';

@Component({
  selector: 'app-reenroll-requests',
  templateUrl: './reenroll-requests.component.html',
  styleUrls: ['./reenroll-requests.component.css']
})
export class ReenrollRequestsComponent implements OnInit {
  msgs;
  status;
  isLoading = false;
  reqData;
  deleting = false;

  constructor(
    private service: ReenrollService,
    private toastr: AppToasterService,
    public dialog: MatDialog,
    private translate: TranslateService
  ) { 
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

    const dialogref = this.dialog.open(ReEnrollAddComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.getRequests();
      }
    });
  }

  delete(id, index) {
    if (confirm(this.translate.instant('reenroll.delete_confirm'))) {
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
