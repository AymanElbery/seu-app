import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TermPostponeService } from '../services/term-postpone.service';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import * as Toast from 'nativescript-toast';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { AddPostponeComponent } from './diag/add-postpone/add-postpone.component.tns';


@Component({
  selector: 'app-postpone-request',
  templateUrl: './postpone-request.component.tns.html',
  styleUrls: ['./postpone-request.component.tns.scss']
})
export class PostponeRequestComponent implements OnInit {

  printAR;
  reason: string;
  reqData;
  msgs;
  status;

  constructor(private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,private acadmicProc: TermPostponeService) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;  
    this.isLoading = true;
    this.reason = '';
    this.getRequests();
  }


  isLoading = false;
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
        var toast = Toast.makeText("خطأ: حاول مرة أخري");
        toast.show();
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

    this._modalService.showModal(AddPostponeComponent, options)
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
        var toast = Toast.makeText((res as any).messages[0].body);
        toast.show();
        if ((res as any).status == 1) {
          this.reqData.reqs.splice(index, 1);
        }
        this.deleting = false;
      }
        , err => {
          var toast = Toast.makeText("خطأ: حاول مرة أخري");
          toast.show();
          this.deleting = false;
        });
    }
  })

  }
    
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }

}
