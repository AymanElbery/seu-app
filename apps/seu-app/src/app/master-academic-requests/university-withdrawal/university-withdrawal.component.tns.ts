import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { masterWithdrawal } from '../../shared/models/master-withdrawal';
import { UniversityWithdrawalService } from '../services/university-withdrawal.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { AddWithdrawalRequestComponent } from './diag/add-withdrawal-request/add-withdrawal-request.component.tns';

@Component({
  selector: 'app-university-withdrawal',
  templateUrl: './university-withdrawal.component.tns.html',
  styleUrls: ['./university-withdrawal.component.tns.scss']
})
export class UniversityWithdrawalComponent implements OnInit {

  printAR;
  withdrawalRequest: masterWithdrawal;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,
    private translate: TranslateService,
    private toastr: AppToasterService,
    private acadmicProc: UniversityWithdrawalService) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;  
    this.withdrawalRequest = { email: "", mobile: "" };
    this.getRequests();
  }

  onTap(): void {
    const options: ModalDialogOptions = {
        viewContainerRef: this._vcRef,
        context: {},
        fullscreen: false,
    };

    this._modalService.showModal(AddWithdrawalRequestComponent, options)
        .then( result => {
        if (this.acadmicProc.newreqs) {
          this.getRequests();
          this.acadmicProc.newreqs = false;
        }
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
 
  print(req) {
    utils.openUrl(this.acadmicProc.Download(req));
  }
  deleting = false;
  delete(id, index) {
    dialogs.confirm({
      title:this.translate.instant('general.delete_confirm'),
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
      }, err => {
        this.toastr.tryagain();
        this.deleting = false;
      });
    }});

  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }

}
