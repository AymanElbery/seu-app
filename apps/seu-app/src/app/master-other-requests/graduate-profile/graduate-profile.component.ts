import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { GraduateProfileService } from '../services/graduate-profile.service';
import { GraduateProfileDetailComponent } from './diag/graduate-profile-detail/graduate-profile-detail.component';
import { AddGraduateProfileComponent } from './diag/add-graduate-profile/add-graduate-profile.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-graduate-profile',
  templateUrl: './graduate-profile.component.html',
  styleUrls: ['./graduate-profile.component.scss']
})
export class GraduateProfileComponent implements OnInit {


  reqData;
  msgs;
  status;
  isLoading = false;
  constructor(public dialog: MatDialog, private toastr: AppToasterService, private gradProfServ: GraduateProfileService) { }
  ngOnInit() {
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
    //request_number = 0;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '95%';
    dialogConfig.height = '85%';
    dialogConfig.direction = "rtl";
    dialogConfig.position = { top: '80px', left: '20px' };

    this.gradProfServ.request_number = request_number;

    this.dialog.open(GraduateProfileDetailComponent, dialogConfig);
  }

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
  }

}
