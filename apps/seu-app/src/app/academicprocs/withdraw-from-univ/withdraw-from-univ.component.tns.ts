import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { WithdrawFromUnivService } from '../services/withdraw-from-univ.service';
import { UnivWithdraw } from '../../shared/models/univ-withdraw';
import { AddRequestComponent } from './diag/add-request/add-request.component.tns';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { RequestData } from '../../shared/models/request-data';


@Component({
  selector: 'app-withdraw-from-univ',
  templateUrl: './withdraw-from-univ.component.tns.html',
  styleUrls: ['./withdraw-from-univ.component.tns.scss']
})
export class WithdrawFromUnivComponent implements OnInit {

  printAR;
  withdraw: UnivWithdraw;
  reqData:RequestData;
  msgs;
  status;

  isLoading = false;
  deleting = false;
  constructor(
    private translate: TranslateService,
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,private acadmicProc: WithdrawFromUnivService,
    private toastr: AppToasterService) { }

  ngOnInit() {

    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;  
    this.isLoading = true;
    this.withdraw = { FeesForstd: 0, IBAN: '', IBANNAME: '', branch: '', email: '', mobile: null, bankimage: '', BANKID: 0 };
    this.getRequests();
  }
  onTap(): void {
    const options: ModalDialogOptions = {
        viewContainerRef: this._vcRef,
        context: {},
        fullscreen: false,
    };

    this._modalService.showModal(AddRequestComponent, options)
        .then( result => {
        if (this.acadmicProc.newreqs) {
          this.getRequests();
          this.acadmicProc.newreqs = false;
        }
    });
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


  print(req) {
    utils.openUrl(this.acadmicProc.print(req));
  }
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
    }
      
});
}
  
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }


}
