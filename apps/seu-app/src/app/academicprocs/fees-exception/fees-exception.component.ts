import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FeesExceptionService } from '../services/fees-exception.service';
import { AddFeesExceptionComponent } from './diag/add-fees-exception/add-fees-exception.component';

@Component({
  selector: 'app-fees-exception',
  templateUrl: './fees-exception.component.html',
  styleUrls: ['./fees-exception.component.css']
})
export class FeesExceptionComponent implements OnInit {
  reqData;
  msgs;
  status;



  constructor(public dialog: MatDialog, private toastr: ToastrService, private acadmicProc: FeesExceptionService) { }

  ngOnInit() {
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
      }
    );
  }

  delete(id, index) {
    if (confirm('هل انت متأكد')) {
      this.acadmicProc.deleteReq(id).then(res => {
        console.log(id);
        this.msgs = (res as any).messages;

        this.status = (res as any).status;

        this.msgs.forEach((element: any) => {
          this.toastr.success('', element.body);

        });
        if (this.status == 1) {
          this.acadmicProc.reqData.requests.splice(index, 1);
        }
      });
    }

  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '80%';
    dialogConfig.height = '80%';
    dialogConfig.direction = "rtl";
    dialogConfig.position = { top: '100px', left: '25px' };


    this.dialog.open(AddFeesExceptionComponent, dialogConfig);
  }

}
