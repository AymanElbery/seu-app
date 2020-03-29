
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { InfoUpdateService } from '../services/info-update.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NgForm } from '@angular/forms';
import {AddNewRequestComponent } from '../info-update/add-new-request/add-new-request.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-info-update',
  templateUrl: './info-update.component.html',
  styleUrls: ['./info-update.component.css']
})
export class InfoUpdateComponent implements OnInit,OnDestroy {

  canaddreq;
  reqData:any;
  msgs;
  status;
  
  constructor(private translate: TranslateService, public dialog: MatDialog, private toastr: AppToasterService, private infoupdateservice: InfoUpdateService) { }
  isLoading = true;
  ngOnInit() {
    
    this.getRequests();
    this.subscribeLangChange();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getRequests();
    });
    
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
    this.infoupdateservice.getRequest().then(
      res => {
        //console.log("get data",res);
        this.reqData = (res as any).data["request"];
        this.canaddreq = (res as any).data["can_update_data"];
       //console.log("get data",this.canaddreq,this.reqData);
        this.msgs = (res as any).messages;
        //this.reqData = this.infoupdateservice.reqData;
        this.msgs = this.infoupdateservice.msgs;
        this.isLoading = false;
      }, err => {
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    const dialogref = this.dialog.open(AddNewRequestComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {   
      this.getRequests();           
    });
  }


  
}
