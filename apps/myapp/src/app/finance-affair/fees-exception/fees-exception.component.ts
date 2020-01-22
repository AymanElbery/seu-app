import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FeesExceptionService } from '../services/fees-exception.service';
import { AddFeesExceptionComponent } from './diag/add-fees-exception/add-fees-exception.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-fees-exception',
  templateUrl: './fees-exception.component.html',
  styleUrls: ['./fees-exception.component.scss']
})
export class FeesExceptionComponent implements OnInit {
  reqData;
  msgs;
  status;
  isLoading = false;


  constructor(public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: FeesExceptionService) { }

  ngOnInit() {
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
      }
    );
  }

  deleting = false;
  delete(id, index) {
    if (confirm('هل انت متأكد')) {
      this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.reqData.requests.splice(index, 1);
        }
        this.deleting = false;
      }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }

  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '80%';
    dialogConfig.position = { top: '100px', left: '25px' };
    dialogConfig.direction = 'rtl';

    let dialogref = this.dialog.open(AddFeesExceptionComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.acadmicProc.newreqs) {
        this.getRequests();
        this.acadmicProc.newreqs = false;
      }
    });
  }

}