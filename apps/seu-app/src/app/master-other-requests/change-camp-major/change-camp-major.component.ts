import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeCampMajorMasterService } from '../services/change-camp-major.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddChangeCampMajorComponent } from './diag/add-change-camp-major/add-change-camp-major.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-camp-major',
  templateUrl: './change-camp-major.component.html',
  styleUrls: ['./change-camp-major.component.scss']
})
export class ChangeCampMajorComponent implements OnInit,OnDestroy {
  printAR;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(
    private translate: TranslateService,
    public dialog: MatDialog, 
    private toastr: AppToasterService, 
    private acadmicProc: ChangeCampMajorMasterService
    ) { }

  ngOnInit() {
    this.isLoading = true;
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
    this.acadmicProc.getgetRequests().then(
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
    dialogConfig.data = this.acadmicProc.reqData;

    let dialogref = this.dialog.open(AddChangeCampMajorComponent, dialogConfig);
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
          this.reqData.reqs.splice(index, 1);
        }
        this.deleting = false;
      }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }
  }

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }

}