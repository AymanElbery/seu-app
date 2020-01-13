import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TermExecuseService } from '../services/term-execuse.service';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { AddExecuseTermComponent } from './diag/add-execuse-term/add-execuse-term.component.tns';
import { AppToasterService } from '../../shared/services/app-toaster.tns';

@Component({
  selector: 'app-execuse-request',
  templateUrl: './execuse-request.component.tns.html',
  styleUrls: ['./execuse-request.component.tns.scss']
})
export class ExecuseRequestComponent implements OnInit {

  reason: string;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,private acadmicProc: TermExecuseService,private toastr: AppToasterService) { }
    
  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right; 
    this.isLoading = true;
    this.reason = '';
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
        this.reqData = [];
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

    this._modalService.showModal(AddExecuseTermComponent, options)
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
  deleting = false;
  delete(id, index) {
    dialogs.confirm({
        title: "هل انت متأكد؟",
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
    }
});
  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }

}
