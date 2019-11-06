import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { GraduateProfileService } from '../services/graduate-profile.service';
import { GraduateProfileDetailComponent } from './diag/graduate-profile-detail/graduate-profile-detail.component';

@Component({
  selector: 'app-graduate-profile',
  templateUrl: './graduate-profile.component.html',
  styleUrls: ['./graduate-profile.component.css']
})
export class GraduateProfileComponent implements OnInit {


  reqData;
  msgs;
  status;
  isLoading = false;
  constructor(public dialog: MatDialog, private toastr: ToastrService, private gradProfServ: GraduateProfileService) { }


  ngOnInit() {
    this.isLoading = true;

    this.gradProfServ.getRequest().then(
      res => {
        this.gradProfServ.reqData = (res as any).data;
        this.gradProfServ.msgs = (res as any).messages;
        this.reqData = this.gradProfServ.reqData;
        this.msgs = this.gradProfServ.msgs;
        this.isLoading = false;
        // console.log(this.reqData.requests);
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '85%';
    dialogConfig.direction = "rtl";
    dialogConfig.position = { top: '80px', left: '20px' };

    this.dialog.open(GraduateProfileDetailComponent, dialogConfig);
  }

}
