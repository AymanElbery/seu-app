import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { GraduateProfileService } from '../services/graduate-profile.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { GraduateProfileDetailComponent } from './diag/graduate-profile-detail/graduate-profile-detail.component.tns';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

@Component({
  selector: 'app-graduate-profile',
  templateUrl: './graduate-profile.component.tns.html',
  styleUrls: ['./graduate-profile.component.tns.scss']
})
export class GraduateProfileComponent implements OnInit {


  reqData;
  msgs;
  status;
  isLoading = false;
  constructor
  (
  private _modalService: ModalDialogService,
  private _vcRef: ViewContainerRef,
  private toastr: AppToasterService, 
  private gradProfServ: GraduateProfileService,
  private routerExtensions: RouterExtensions) { }
  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right; 
    this.getRequests();
  }

  getRequests() {
    this.isLoading = true;

    this.gradProfServ.getRequest().then(
      res => {
        this.gradProfServ.reqData = (res as any).data;
        this.gradProfServ.msgs = (res as any).messages;
        this.reqData = this.gradProfServ.reqData;
        this.msgs = this.gradProfServ.msgs;
        this.isLoading = false;
        // //console.log(this.reqData.requests);
      }, err => {
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }

 openDialoge(request_number) {
  const options: ModalDialogOptions = {
    viewContainerRef: this._vcRef,
    context: {},
    fullscreen: false,
};

    this.gradProfServ.request_number = request_number;

    this._modalService.showModal(GraduateProfileDetailComponent, options)
  
    }

    onTap(){
      this.routerExtensions.navigate(['/other/addgraduateprofile'], {
        transition: {
            name: 'fade'
        }
    });
    }
    onDrawerButtonTap(): void {
      const sideDrawer =  app.getRootView() as RadSideDrawer;
      sideDrawer.showDrawer();
    }

/*
  openAddDialoge() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '95%';
    dialogConfig.height = '85%';
    dialogConfig.direction = "rtl";
    dialogConfig.position = { top: '80px', left: '20px' };


    let dialogref = this.dialog.open(AddGraduateProfileComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.gradProfServ.newreqs) {
        this.getRequests();
        this.gradProfServ.newreqs = false;
      }
    });
  }*/

}
