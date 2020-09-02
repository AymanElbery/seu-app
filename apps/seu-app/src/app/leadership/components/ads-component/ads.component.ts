import { Component, OnInit, ViewEncapsulation, OnDestroy, ɵConsole } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { LeadershipService } from '../../services/leadership.service';

import { HttpRequestService } from '../../../shared/services/http-request.service';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from "@angular/material/core";
import { AddAdsComponent } from "./diag/add-ads/add-ads.component";

@Component({
  selector: 'app-ads',
  styleUrls: ['./ads.component.css'],
  templateUrl: './ads.component.html'
})
export class AdsComponent{
  
  ads; 
  isLoading = false;
  constructor(
    public userService: UserService, 
    private leadershipService: LeadershipService, 
    private http: HttpClient, 
    private reqservice: HttpRequestService, 
    private router: Router, 
    private route: ActivatedRoute,
    private toastr: AppToasterService,
    public translate: TranslateService,
    public dialog: MatDialog
  ) {
    this.getAllAds();
  }  

  getAllAds() {
    this.isLoading = true;
    this.leadershipService.list_ads().subscribe(
      (response: any) => {
        if (response) {
          this.ads = response.data;
          this.isLoading = false;
        }
      },
      error => {
      }
    )
  }

  delete(id) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.isLoading = true;
      this.leadershipService.delete_ads(id).subscribe(
        (response: any) => {
          if (response) {
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant("leadership.ad.success_deleted")
            }]);
            this.getAllAds();
          }
        },
        error => {
        }
      )
    }
  }

  addAds() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';

    let dialogref = this.dialog.open(AddAdsComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
        this.getAllAds();
    });
  }
}