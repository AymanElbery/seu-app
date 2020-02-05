import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { changeCourse } from '../../shared/models/change-course';
import { ChangeCourseService } from '../services/change-course.service';
import { AddChangeCourseComponent } from './diag/add-change-course/add-change-course.component.tns';
import { NgForm } from '@angular/forms';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import * as utils from 'tns-core-modules/utils/utils';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-course',
  templateUrl: './change-course.component.tns.html',
  styleUrls: ['./change-course.component.scss']
})
export class ChangeCourseComponent implements OnInit {

  changecourse: changeCourse;
  reqData;
  msgs;
  status;
  isLoading = false;

  // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: variable-name
  constructor(private router: Router, private translate: TranslateService, private _modalService: ModalDialogService,
    // tslint:disable-next-line: variable-name
              private _vcRef: ViewContainerRef, private toastr: AppToasterService, private acadmicProc: ChangeCourseService) { }

  ngOnInit() {
    this.changecourse = { bacholar_copy: '', major: '', mobile: '', reason: '', academic_record: '', outside: '' };
    this.getRequests();
  }

  getRequests() {
    this.isLoading = true;
    this.acadmicProc.getRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        console.log('DATA :' + this.acadmicProc.reqData);
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
        // console.log(this.reqData);
      }, err => {
        this.reqData = [];
        this.msgs = [];
        console.log(err);
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

    this._modalService.showModal(AddChangeCourseComponent, options)
        .then( result => {
        if (this.acadmicProc.newreqs) {
          this.getRequests();
          this.acadmicProc.newreqs = false;
        }
    });
}


  print(req) {
    // utils.openUrl(this.acadmicProc.Download(req));
  }
  delete(id, index) {
    dialogs.confirm({
        title: 'هل انت متأكد؟',
        message: '',
        okButtonText: 'OK',
        cancelButtonText: 'Cancel'
    }).then((result: boolean) => {
      if (result) {
      // this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.reqData.reqs.splice(index, 1);
        }
        // this.deleting = false;
      }
        , err => {
          this.toastr.tryagain();
        //  this.deleting = false;
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
 add() {

  this.router.navigate(['/other/addchangecourse']);
 }
}
