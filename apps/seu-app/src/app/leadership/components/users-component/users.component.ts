import { Component, OnInit } from '@angular/core';
import { LeadershipService } from '../../services/leadership.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { LeadershipUserFormComponent } from './dialog/leadership-user-form.component';
@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.css'],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  isLoading = false;
  userslist = [];
  constructor(private leadershipService: LeadershipService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.loadUsersList();
  }

  loadUsersList() {
    this.isLoading = true;
    this.leadershipService.users_list().subscribe(response => {
      if (response['status']) {
        this.userslist = response['data']['users'];
      }
      this.isLoading = false;
    });
  }
  newUser() {
    this.userForm(null);
  }
  edit(user) {
    this.userForm(user);
  }
  userForm(user) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = { user };
    let dialogref = this.dialog.open(LeadershipUserFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe(refresh => {
      if (refresh) {
        this.loadUsersList();
      }
    });
  }
}