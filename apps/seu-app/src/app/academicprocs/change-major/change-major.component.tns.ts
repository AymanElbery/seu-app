import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ChangeMajorService } from '../services/change-major.service';
import { CancelCousre } from '../../shared/models/cancel-cousre';
import { AppToasterService } from '../../shared/services/app-toaster';
import * as utils from 'tns-core-modules/utils/utils';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { AddChangeMajorComponent } from './diag/add-change-major/add-change-major.component.tns';
import { RequestData } from '../../shared/models/request-data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-major',
  templateUrl: './change-major.component.tns.html',
  styleUrls: ['./change-major.component.tns.scss']
})
export class ChangeMajorComponent implements OnInit {
  printAR;
  cancelCousre: CancelCousre;
  reqData:RequestData;
  msgs;
  status;
  isLoading = false;
  constructor(private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,
      private toastr: AppToasterService, 
      private acadmicProc: ChangeMajorService,
      private translate: TranslateService) { }
  deleting = false;

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    this.isLoading = true;
    this.cancelCousre = { courses: null, agreement: 1 };
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

    this._modalService.showModal(AddChangeMajorComponent, options)
        .then( result => {
        if (this.acadmicProc.newreqs) {
          this.getRequests();
          this.acadmicProc.newreqs = false;
        }
    });
}


  print(req) {
    utils.openUrl(this.acadmicProc.Download(req));
  }
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
        // tslint:disable-next-line: triple-equals
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

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
}
