import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ObjectExamService } from '../services/object-exam.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { AddExamObjectComponent } from './diag/add-exam-object/add-exam-object.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';


@Component({
  selector: 'app-object-exam',
  templateUrl: './object-exam.component.html',
  styleUrls: ['./object-exam.component.scss']
})
export class ObjectExamComponent implements OnInit {

  //changeRequest: ChangeRequest;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: ObjectExamService) { }

  ngOnInit() {
    this.getRequests();
  }
  getRequests() {
    this.isLoading = true;
    this.acadmicProc.getRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
      }
    )
  }
  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';

    let dialogref = this.dialog.open(AddExamObjectComponent, dialogConfig);
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
}