import {Component, OnInit, ViewEncapsulation, OnDestroy, ɵConsole} from '@angular/core';
import {UserService} from '../../../account/services/user.service';
import {LeadershipService} from '../../services/leadership.service';

import {HttpRequestService} from '../../../shared/services/http-request.service';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute, NavigationExtras} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-ads-dean-recommendations',
  styleUrls: ['./ads-dean-recommendations.component.css'],
  templateUrl: './ads-dean-recommendations.component.html'
})
export class AdsDeanRecommendationsComponent implements OnDestroy {

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
    public translate: TranslateService,
  ) {
    this.getAllAds();
    this.currentJobAds = this.leadershipService.currentJobAds;
  }

  ngOnDestroy() {
    this.leadershipService.currentJobAds = null;
  }

  getAllAds() {
    this.isLoading = true;
    this.leadershipService.list_recommender_ads().subscribe(
      (response: any) => {
        let ads = response['data']['ads'];
        this.ads = ads.filter(ad =>
          (!this.leadershipService.currentJobAds ||
            this.leadershipService.currentJobAds['JOB_PK'] == ad['JOB_ID'])
        );
        this.isLoading = false;
      }
    );
  }

  recommendations(ad) {
    this.leadershipService.currentAddApps = ad;
    this.router.navigate(['../ads-recommendations/edit'], {relativeTo: this.route});
  }
}
