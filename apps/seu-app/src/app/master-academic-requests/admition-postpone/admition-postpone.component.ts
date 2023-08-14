import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { AdmitionPostponeService } from '../services/admition-postpone.service';
import { studyPostpone } from 'src/app/shared/models/study-postpone';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { AddAdmitionPostponeComponent } from './diag/add-admition-postpone/add-admition-postpone.component';

@Component({
  selector: 'app-admition-postpone',
  templateUrl: './admition-postpone.component.html',
  styleUrls: ['./admition-postpone.component.css']
})
export class AdmitionPostponeComponent implements OnInit,OnDestroy {


  studypostpone: studyPostpone;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(
    private translate: TranslateService, 
    public dialog: MatDialog, 
    private toastr: AppToasterService, 
    private acadmicProc: AdmitionPostponeService
  ) { }

  ngOnInit() {
    this.studypostpone = { num_terms: '', reason: '', mobile: '' };
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
    this.acadmicProc.getRequest().then(
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
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';

    const dialogref = this.dialog.open(AddAdmitionPostponeComponent, dialogConfig);
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
