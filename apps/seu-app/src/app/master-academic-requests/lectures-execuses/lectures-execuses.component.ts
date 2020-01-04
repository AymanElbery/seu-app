import { Component, OnInit } from '@angular/core';
import { AddLecturesExecusesComponent } from './diag/add-lectures-execuses/add-lectures-execuses.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { LectureExecuse } from 'src/app/shared/models/lecture-execuse';
import { LecturesExecusesService } from '../services/lectures-execuses.service';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-lectures-execuses',
  templateUrl: './lectures-execuses.component.html',
  styleUrls: ['./lectures-execuses.component.scss']
})
export class LecturesExecusesComponent implements OnInit {

  printAR;
  lectureExecuse: LectureExecuse;
  reqData;
  msgs;
  isLoading = false;

  constructor(private translate: TranslateService, public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: LecturesExecusesService) { }

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
    dialogConfig.width = '60%';

    const dialogref = this.dialog.open(AddLecturesExecusesComponent, dialogConfig);
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
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
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
