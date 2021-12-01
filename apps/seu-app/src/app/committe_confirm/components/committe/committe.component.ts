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
  constructor(
    public userService: UserService,
    public committeService: CommitteService,
    public translate: TranslateService,
    private toastr: AppToasterService,
    public dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.date = new Date();
  }

  ngOnInit() {
    document.getElementById("side-menu").style.display = "none";
  }

  ngOnDestroy() {
    document.getElementById("side-menu").style.display = "block";
  }

  navigateToSd(){
    this.router.navigate(['/academic-assistant/committe']);
  }

  acknowledgmentChange(e){
    this.save_button = e.target.checked;
  }

}