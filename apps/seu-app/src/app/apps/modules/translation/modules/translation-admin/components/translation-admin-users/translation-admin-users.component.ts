import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminUsersService } from '../../../../services/translation-admin-users';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { TranslationAdminAddUsersComponent } from './../translation-admin-add-users/translation-admin-add-users.component';

@Component({
  selector: 'app-translation-admin-users',
  templateUrl: './translation-admin-users.component.html',
  styleUrls: ['./translation-admin-users.component.css']
})
export class TranslationAdminUsersComponent implements OnInit {

  usersList = [];
  isLoading = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: AdminUsersService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.usersService.getUsers().subscribe((response) => {
      this.usersList = response['data'];
      this.isLoading = false;
    },err=>{
      this.usersService.tryagain();
    });
  }

  inActivate(id){
    let data = {'id': id};
    this.isLoading = true;
    this.usersService.inActivate(data).subscribe((response) => {
      this.getUsers();
    },err=>{
      this.usersService.tryagain();
    });
  }

  activate(id){
    let data = {'id': id};
    this.isLoading = true;
    this.usersService.activate(data).subscribe((response) => {
      this.getUsers();
    },err=>{
      this.usersService.tryagain();
    });
  }

  openAddUserDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';

    let dialogref = this.dialog.open(TranslationAdminAddUsersComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if(result){
        this.getUsers();
      }
    });
  }
}
