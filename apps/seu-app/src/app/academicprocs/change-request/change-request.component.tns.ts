import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ChangeRequestService } from '../services/change-request.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { AddRequestChangeComponent } from './diag/add-request-change/add-request-change.component.tns';
import { RequestData } from '../../shared/models/request-data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-request',
  templateUrl: './change-request.component.tns.html',
  styleUrls: ['./change-request.component.tns.scss']
})
export class ChangeRequestComponent implements OnInit {

  reqData:RequestData;
  msgs;
  status;
  isLoading = false;

  //canAdd:boolean;
  constructor(private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,
      private toastr: AppToasterService, 
    private acadmicProc: ChangeRequestService,
    private translate: TranslateService) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right; 
    this.isLoading = true;
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
      }, err => {
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }
  onTap(): void {
    const options: ModalDialogOptions = {
        viewContainerRef: this._vcRef,
        context: {},
        fullscreen: false,
    };

    this._modalService.showModal(AddRequestChangeComponent, options)
        .then( result => {
        if (this.acadmicProc.newreqs) {
          this.getRequests();
          this.acadmicProc.newreqs = false;
        }
    });
}

  deleting = false;
  delete(id, index) {
        dialogs.confirm({
            title: this.translate.instant('general.delete_confirm'),
            message: "",
            okButtonText: "OK",
            cancelButtonText: 'Cancel'
        }).then((result:boolean) => {
          if (result) {
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
    }});
  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
}