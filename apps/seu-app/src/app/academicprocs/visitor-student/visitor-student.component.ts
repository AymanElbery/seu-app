import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { VisitorStudentService } from '../services/visitor-student.service';
import { AddVisitorStudentComponent } from './diag/add-visitor-student/add-visitor-student.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-visitor-student',
  templateUrl: './visitor-student.component.html',
  styleUrls: ['./visitor-student.component.scss']
})
export class VisitorStudentComponent implements OnInit, OnDestroy {
  constructor(
    private translate: TranslateService, public dialog: MatDialog,
    private toastr: AppToasterService,
    private acadmicProc: VisitorStudentService
  ) { }
  reqData;
  msgs;
  status;
  isLoading = false;

  deleting = false;

  ngOnInit() {
    this.getRequests();
    this.subscribeLangChange();
  }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getRequests();
    });
  }

  getRequests() {
    this.isLoading = true;
    this.acadmicProc.getِgetRequests().then(res => {
      this.acadmicProc.reqData = (res as any).data;
      this.acadmicProc.msgs = (res as any).messages;
      this.reqData = this.acadmicProc.reqData;
      this.msgs = this.acadmicProc.msgs;
      this.isLoading = false;
    });
  }
  delete(id, index) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
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
    dialogConfig.disableClose = false;
    dialogConfig.width = '65%';
    // dialogConfig.height = '80%';
    // dialogConfig.direction = "rtl";
    // dialogConfig.position = { top: '100px', left: '25px' };
    const dialogref = this.dialog.open(AddVisitorStudentComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.acadmicProc.newreqs) {
        this.getRequests();
        this.acadmicProc.newreqs = false;
      }
    });
  }


  printRequest(requestNbr) {
    return this.acadmicProc.Download(requestNbr);
  }
}
