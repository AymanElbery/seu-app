import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeScheduleService } from '../services/change-schedule-request.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { AddChangeScheduleRequestComponent } from './dialogue/add-change-schedule-request.component';

@Component({
  selector: 'app-change-schedule-univ',
  templateUrl: './change-schedule-request.component.html',
  styleUrls: ['./change-schedule-request.component.scss']
})
export class ChangeScheduleComponent implements OnInit, OnDestroy {

  isLoading = false;
  deleting = false;
  reqData = [];
  msgs;
  days = [
    '', 
    'sunday', 
    'monday', 
    'tuesday', 
    'wednesday', 
    'thursday', 
  ];

  constructor(private translate: TranslateService,
    public dialog: MatDialog,
    private toastr: AppToasterService,
    private service: ChangeScheduleService) {

  }
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
    this.service.getRequests().then(
      res => {
        this.service.reqData = (res as any).data;
        this.service.msgs = (res as any).messages;
        this.reqData = this.service.reqData;
        this.msgs = this.service.msgs;
        this.isLoading = false;
      }, err => {
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }

  cancel(id){
    this.isLoading = true;
    this.service.cancelRequest(id).then(
      res => {
        this.service.reqData = (res as any).data;
        this.service.msgs = (res as any).messages;
        this.msgs = this.service.msgs;
        this.isLoading = false;
        this.getRequests();
      }, err => {
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
        this.getRequests();
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';

    let dialogref = this.dialog.open(AddChangeScheduleRequestComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.service.newreqs) {
        this.getRequests();
        this.service.newreqs = false;
      }
    });
  }

}
