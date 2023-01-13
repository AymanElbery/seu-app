import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { StudyPostponeService } from '../services/study-postpone.service';
import { studyPostpone } from '../../shared/models/study-postpone';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from '../../shared/services/app-toaster';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { AddStudyPostponeComponent } from './diag/add-study-postpone/add-study-postpone.component.tns';
import { RequestData } from '../../shared/models/request-data';

@Component({
  selector: 'app-study-postpone',
  templateUrl: './study-postpone.component.tns.html',
  styleUrls: ['./study-postpone.component.tns.scss']
})
export class StudyPostponeComponent implements OnInit {


  studypostpone: studyPostpone;
  reqData:RequestData={can_add_new_request:false,notes:[],reqs:[],requests:[]};
  msgs;
  status;
  isLoading = false;

  constructor(
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,
    private translate: TranslateService, private toastr: AppToasterService, private acadmicProc: StudyPostponeService) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;  
    this.studypostpone = { num_terms: '', reason: '', mobile: '' };
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

    this._modalService.showModal(AddStudyPostponeComponent, options)
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
