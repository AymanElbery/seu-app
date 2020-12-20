import { Component, OnInit } from '@angular/core';
import { LeadershipService } from 'src/app/leadership/services/leadership.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leadership-application-adslist',
  templateUrl: './leadership-application-adslist.component.html',
  styleUrls: ['./leadership-application-adslist.component.css']
})
export class LeadershipApplicationAdslistComponent implements OnInit {

  isLoading = false;
  addsList = [];
  constructor(
    private leadershipService: LeadershipService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadadds();
  }

  loadadds() {
    this.isLoading = true;
    this.leadershipService.addslist().subscribe((response) => {
      this.addsList = response['data']['adds'];
      this.leadershipService.instructor = response['data']['instructor'];
      this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
      this.leadershipService.tryagain();
    });

  }

  apply(ad) {
    this.leadershipService.currentAdd = ad;
    this.router.navigate(['../create'], { relativeTo: this.route });
  }

  recommend(ad) {
    this.leadershipService.currentAdd = ad;
    this.router.navigate(['../create-recommend'], { relativeTo: this.route });
  }

}
