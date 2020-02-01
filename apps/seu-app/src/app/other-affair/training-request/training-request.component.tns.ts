import { Component, OnInit, ViewContainerRef } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import {TrainingRequestService} from '../services/training-request.service';
import {training} from '../../shared/models/training';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { AddTrainingRequestComponent } from './diag/add-training-request/add-training-request.component.tns';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import * as utils from 'tns-core-modules/utils/utils';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

@Component({
  selector: 'app-training-request',
  templateUrl: './training-request.component.tns.html',
  styleUrls: ['./training-request.component.tns.scss']
})
export class TrainingRequestComponent implements OnInit {

  printAR;
  training: training;
  reqData;
  msgs;
  status;
  isLoading = false;
  ar: any = '';
  en: any = '';
  here: any = '';
  htmlString1: string;
  htmlString2: string;
  htmlString3: string;


  constructor(private toastr: AppToasterService, private acadmicProc: TrainingRequestService,
              private _modalService: ModalDialogService,
              private _vcRef: ViewContainerRef, private translate: TranslateService) {

      this.ar = this.translate.instant('general.ar_language');
      this.en = this.translate.instant('general.en_language');
      this.here = this.translate.instant('services.training_request.here');
      this.htmlString1 = '<a href="#">'.concat(this.ar).concat('</a>');
      this.htmlString2 = '<a href="#">'.concat(this.en).concat('</a>');
      this.htmlString3 = '<a href="#">'.concat(this.here).concat('</a>');
     }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    this.isLoading = true;
    this.training = {organization: ''};
    this.acadmicProc.getِgetRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.isLoading = false;


      }
    );
  }

  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(  res => {
      this.acadmicProc.msgs = (res as any).messages;

        });
  }
  onSubmit() {
 // this.addRequest(form.value);
  }

  print(req) {
    utils.openUrl(this.acadmicProc.Download(req));
  }

  delete(id, index) {
    dialogs.confirm({
    title: 'هل انت متأكد؟',
    message: '',
    okButtonText: 'OK',
    cancelButtonText: 'Cancel'
    }).then((result: boolean) => {
    if (result) {
    this.acadmicProc.deleteReq(id).then(res => {
      this.msgs =   (res as any).messages;

      this.status =   (res as any).status;

      this.toastr.push(this.msgs);

        if (this.status == 1) {
          this.acadmicProc.reqData.requests.splice(index, 1);
        }
    });

}});


}
onTap(): void {
    const options: ModalDialogOptions = {
        viewContainerRef: this._vcRef,
        context: {},
        fullscreen: false,
    };

    this._modalService.showModal(AddTrainingRequestComponent, options);

}
onDrawerButtonTap(): void {
  const sideDrawer =  app.getRootView() as RadSideDrawer;
  sideDrawer.showDrawer();
}
}
