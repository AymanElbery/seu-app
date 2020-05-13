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
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from "@angular/material/core";
import { AddAnswerComponent } from './../add-answer/add-answer.component';

@Component({
  selector: 'app-list',
  styleUrls: ['./list.component.css'],
  templateUrl: './list.component.html'
})
export class ListComponent{

  p: number;
  data;
  isLoading;
  title: string;
  config;
  email;
  admins;

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

    if(this.admins.indexOf(this.email) == -1){
      this.router.navigate(['/enquries/unreply']);
    }

    this.isLoading = true;
    this.enquriesService.getListEnquries().subscribe(
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