import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminAdminsService } from '../../../../services/resume-admin-admins';
import { ResumeUserService } from '../../../../services/resume-user';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ResumeAdminAddUsersComponent } from './../resume-admin-add-users/resume-admin-add-users.component';


@Component({
  selector: 'app-resume-admin-admins',
  templateUrl: './resume-admin-admins.component.html',
  styleUrls: ['./resume-admin-admins.component.css']
})
export class ResumeAdminAdminsComponent implements OnInit {

  admins = [];
  isLoading = false;
  userId;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: ResumeUserService,
    private adminService: AdminAdminsService,
    public dialog: MatDialog
  ) {
    this.userId = this.userService.user.ID;
  }

  ngOnInit() {
    this.getAdmins(); 
  }

  openAddAdminDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';

    let dialogref = this.dialog.open(ResumeAdminAddUsersComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if(result){
        this.getAdmins();
      }
    });
  }

  getAdmins() {
    this.isLoading = true;
    this.adminService.getAdmins().subscribe((response) => {
      this.admins = response['data'];
      this.isLoading = false;
    }, err => {
      this.adminService.tryagain();
      this.isLoading = false;
    });
  }

  inActivate(id){
    let data = {'id': id};
    this.isLoading = true;
    this.adminService.inActivate(data).subscribe((response) => {
      this.getAdmins();
    },err=>{
      this.adminService.tryagain();
    });
  }

  activate(id){
    let data = {'id': id};
    this.isLoading = true;
    this.adminService.activate(data).subscribe((response) => {
      this.getAdmins();
    },err=>{
      this.adminService.tryagain();
    });
  }

}
