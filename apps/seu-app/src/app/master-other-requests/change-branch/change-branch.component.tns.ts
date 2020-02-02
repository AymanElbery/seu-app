import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { changeBranch } from '../../shared/models/change-branch';
import { ChangeBranchService } from '../services/change-branch.service';
import { AddChangeBranchComponent } from './diag/add-change-branch/add-change-branch.component.tns';
import { NgForm } from '@angular/forms';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import * as utils from 'tns-core-modules/utils/utils';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
@Component({
  selector: 'app-change-branch',
  templateUrl: './change-branch.component.html',
  styleUrls: ['./change-branch.component.scss']
})
export class ChangeBranchComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private translate: TranslateService,
              // tslint:disable-next-line: variable-name
              private _modalService: ModalDialogService,
    // tslint:disable-next-line: variable-name
              private _vcRef: ViewContainerRef,
              private toastr: AppToasterService,
              private acadmicProc: ChangeBranchService) { }

  printAR;
  changeBranch: changeBranch;
  reqData;
  msgs;
  status;
  isLoading = false;

  deleting = false;


  
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
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
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }
 
  // tslint:disable-next-line: adjacent-overload-signatures
  delete(id, index) {

        dialogs.confirm({
            title: this.translate.instant('general.delete_confirm'),
            message: '',
            okButtonText: 'OK',
            cancelButtonText: 'Cancel'
        }).then((result: boolean) => {
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
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }

  onTap(): void {
    const options: ModalDialogOptions = {
        viewContainerRef: this._vcRef,
        context: {},
        fullscreen: false,
    };

    this._modalService.showModal(AddChangeBranchComponent, options)
        .then( result => {
        if (this.acadmicProc.newreqs) {
          this.getRequests();
          this.acadmicProc.newreqs = false;
        }
    });
}

}

