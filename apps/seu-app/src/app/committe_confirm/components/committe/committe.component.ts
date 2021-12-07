import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { CommitteService } from '../../services/committe.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-committe',
  styleUrls: ['./committe.component.css'],
  templateUrl: './committe.component.html'
})
export class CommitteComponent implements OnInit, OnDestroy{

  isLoading = false;
  date;
  save_button = false;
  submitted = false;
  std_id;
  constructor(
    public committeService: CommitteService,
    public userService: UserService,
    public translate: TranslateService,
    private toastr: AppToasterService,
    public dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.date = new Date();
    this.std_id = this.userService.userData.id;
  }

  ngOnInit() {
    document.getElementById("side-menu").style.display = "none";
  }

  ngOnDestroy() {
    document.getElementById("side-menu").style.display = "block";
  }

  navigateToSd(){
    this.userService.userData.COMMITTE_CONFIRM = 2;
    this.router.navigate(['/academic-assistant/committe']);
  }

  acknowledgmentChange(e){
    this.save_button = e.target.checked;
  }

  click(){
    let data = {
      'ID'                : this.userService.userData.id,
    };
    this.committeService.post('committe_confirm/secure_file' , data).subscribe(
    (response: any) => {
      if(response){
        if(response.data){
          window.location.href = "https://seuapps.seu.edu.sa/newservices/api/rest/committe.php?file=" + this.std_id + ".pdf";
        }
      }
    },
    error => {
      return false;
    });
  }

  save(){
    this.submitted = true;
    let data = {
      'STATUS'            : 1,
      'ID'                : this.userService.userData.id,
      'EMAIL'             : this.userService.userData.email
    };
    this.committeService.post('committe_confirm/save' , data).subscribe(
      (response: any) => {
        if (response) {
          if (response['status']) {
            this.userService.userData.COMMITTE_CONFIRM = 1;
            this.router.navigate(['/']);
          } else {
            this.toastr.tryagain();
          }
          this.submitted = false;
        }
      },
      error => {
        this.toastr.tryagain();
        this.submitted = false;
      });
  }
}