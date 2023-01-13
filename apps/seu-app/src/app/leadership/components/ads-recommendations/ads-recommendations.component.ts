import {Component, OnInit, ViewEncapsulation, OnDestroy, ɵConsole} from '@angular/core';
import {UserService} from '../../../account/services/user.service';
import {LeadershipService} from '../../services/leadership.service';

import {HttpRequestService} from '../../../shared/services/http-request.service';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AppToasterService} from '../../../shared/services/app-toaster';

@Component({
  selector: 'app-ads-recommendations',
  styleUrls: ['./ads-recommendations.component.css'],
  templateUrl: './ads-recommendations.component.html'
})
export class AdsRecommendationsComponent implements OnDestroy {

  recommendations;
  currentAd: number;
  isLoading = false;

  constructor(
    public userService: UserService,
    private leadershipService: LeadershipService,
    private http: HttpClient,
    private reqservice: HttpRequestService,
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private toastr: AppToasterService,
  ) {
    if (!this.leadershipService.currentAddApps) {
    this.back();
  }
    this.currentAd = this.leadershipService.currentAddApps;
    this.getRecommendations();
  }

  back() {
    this.router.navigate(['../ads'], {relativeTo: this.route});
  }


  ngOnDestroy() {
    this.leadershipService.currentJobAds = null;
  }

  getRecommendations() {
    this.isLoading = true;
    this.leadershipService.list_ad_recommendations(this.currentAd['ADS_PK']).subscribe(
      (response: any) => {
        this.recommendations = response['data']['recommendations'];
        this.isLoading = false;
      }
    );
  }

  confirm(status, empId){
    console.log(status, empId);
    this.isLoading = true;
    this.leadershipService.confirm_recommendation({
      'RECOM_ID' : empId,
      'CONFIRMED': status,
      'AD_ID': this.currentAd['ADS_PK']
    }).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response.status) {
          this.leadershipService.notifySucc(response['res_code']);
        } else {
          this.leadershipService.notifyError(response['res_code']);
        }
        this.isLoading = false;
        this.getRecommendations();
      },
      error => {
        this.isLoading = false;
        this.toastr.tryagain();
      }
    );
  }
}
