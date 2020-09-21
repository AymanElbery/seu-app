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
export class AdsComponent implements OnDestroy{

  ads;
  currentJobAds;
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
    this.currentJobAds = this.leadershipService.currentJobAds;
  }

  ngOnDestroy(){
    this.leadershipService.currentJobAds = null;
  }
  getAllAds() {
    this.isLoading = true;
    this.leadershipService.list_ads().subscribe(
      (response: any) => {
        let ads = response['data']['ads'];
        this.ads = ads.filter(ad =>
          (!this.leadershipService.currentJobAds ||
            this.leadershipService.currentJobAds['JOB_PK'] == ad['JOB_ID'])
        );
        this.isLoading = false;
      }
    )
  }


  delete(id) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.isLoading = true;
      this.leadershipService.delete_ads(id).subscribe(
        (response: any) => {
          if (response.status) {
            this.leadershipService.notifySucc(response['res_code']);
            this.getAllAds();
          } else {
            this.leadershipService.notifyError(response['res_code']);
          }
        },
        error => {
        }
      );
    }
  }

  showAddForm(ad) {
    ad = JSON.parse(JSON.stringify(ad));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '60%';
    dialogConfig.data = { ad };

    let dialogref = this.dialog.open(AddAdsComponent, dialogConfig);
    dialogref.afterClosed().subscribe(refresh => {
      if (refresh)
        this.getAllAds();
    });
  }

  applications(ad) {
    this.leadershipService.currentAddApps = ad;
    this.router.navigate(["../applications"], { relativeTo: this.route })
  }
  recommendations(ad){
    this.leadershipService.currentAddApps = ad;
    this.router.navigate(["../adrecommendations"], { relativeTo: this.route })
  }
}