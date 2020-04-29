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

@Component({
  selector: 'app-reply',
  styleUrls: ['./reply.component.css'],
  templateUrl: './reply.component.html'
})
export class ReplyComponent{

  p: number;
  data;
  isLoading;
  title: string;
  config;
  empsEmails;
  empsNames;
  emps = [];
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

    if(this.admins.indexOf(this.email) == -1){
      this.router.navigate(['/enquries/unreply']);
    }
    this.empsEmails = environment.chatbot_emps_emails;
    this.empsNames = environment.chatbot_emps_names;

    for (let i = 0; i < this.empsEmails.length; i++) {
      if (this.empsEmails[i] == "HALtamimy@seu.edu.sa" || this.empsEmails[i] == "A.dossari@seu.edu.sa") {
        let emp = {name: this.empsNames[i], email: this.empsEmails[i], role: 'admin'} ;
        this.emps.push(emp);
      }else{
        let emp = {name: this.empsNames[i], email: this.empsEmails[i], role: 'normal'} ;
        this.emps.push(emp);
      }
    }
    this.isLoading = true;
    this.enquriesService.getRepliedEnquries().subscribe(
      (response: any) => {
        if (response) {
          this.isLoading = false;
          this.data = response.data;
        }
      },
      error => {}
    );
  }

  onChange(email){
    this.isLoading = true;
    if (email != "all") {
      this.enquriesService.getRepliedByEnquries(email).subscribe(
        (response: any) => {
          if (response) {
            this.isLoading = false;
            this.data = response.data;
          }
        },
        error => {}
      );
    }else{
      this.enquriesService.getRepliedEnquries().subscribe(
        (response: any) => {
          if (response) {
            this.isLoading = false;
            this.data = response.data;
          }
        },
        error => {}
      );
    }
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}