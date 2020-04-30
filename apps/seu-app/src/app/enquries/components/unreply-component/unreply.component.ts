import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { EnquriesService } from '../../services/enquries.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { HttpRequestService } from '../../../shared/services/http-request.service';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { AddAnswerComponent } from './../add-answer/add-answer.component';

@Component({
  selector: 'app-unreply',
  styleUrls: ['./unreply.component.css'],
  templateUrl: './unreply.component.html'
})
export class UnReplyComponent{

  p: number;
  data;
  isLoading;
  title: string;
  config;
  admins;
  email;

  constructor(
    public userService: UserService, 
    private enquriesService: EnquriesService, 
    private http: HttpClient, 
    private reqservice: HttpRequestService, 
    private router: Router, 
    private route: ActivatedRoute,
    private toastr: AppToasterService,
    public translate: TranslateService,
    public dialog: MatDialog,
  ) {
    this.admins = environment.chatbot_emps_admins_emails;
    this.email = this.userService.userData.email;

    this.isLoading = true;
    this.enquriesService.getUnrepliedEnquries().subscribe(
      (response: any) => {
        if (response) {
          this.isLoading = false;
          this.data = response.data;
        }
      },
      error => {}
    );
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }


  openDialog(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = {id: id};

    let dialogref = this.dialog.open(AddAnswerComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      
    });
  }

}