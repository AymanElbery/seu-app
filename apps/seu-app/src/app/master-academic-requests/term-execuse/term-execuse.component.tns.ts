import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TermExecuseService } from '../services/term-execuse.service';
import { termExecuse } from '../../shared/models/term-execue';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from '../../shared/services/app-toaster';
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { AddTermExecuseComponent } from './diag/add-term-execuse/add-term-execuse.component.tns';
import { RequestData } from '../../shared/models/request-data';

@Component({
  selector: 'app-term-execuse',
  templateUrl: './term-execuse.component.tns.html',
  styleUrls: ['./term-execuse.component.tns.scss']
})
export class TermExecuseComponent implements OnInit {


  termExecuse: termExecuse;
  reqData:RequestData;
  msgs;
  status;
  isLoading = false;

  constructor(
      private _modalService: ModalDialogService,
      private _vcRef: ViewContainerRef,
      private translate: TranslateService,
      private toastr: AppToasterService, 
      private acadmicProc: TermExecuseService) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;  
    this.termExecuse = { reason: '', mobile: '', num_terms: '' };
    this.getRequests();
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

    this._modalService.showModal(AddTermExecuseComponent, options)
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
      }, err => {
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
