import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadershipService } from '../../services/leadership.service';

@Component({
  selector: 'app-leadership-personal-interview',
  templateUrl: './leadership-personal-interviews.component.html',
  styleUrls: ['./leadership-personal-interviews.component.css']
})
export class LeadershipPersonalInterviewsComponent implements OnInit {

  adsList;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private leadershipService: LeadershipService
  ) { 

  }

  back() {
    this.router.navigate(['../applications'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.loadInterviewrCurrentAds();
  }

  loadInterviewrCurrentAds() {
    this.isLoading = true;
    this.leadershipService.loadInterviewrCurrentAds().subscribe((response => {
      this.adsList = response['data']['ads'];
      this.isLoading = false;
    }));
  }

  applications(ad) {
    this.leadershipService.currentAddApps = ad;
    this.router.navigate(['../interview-applications'], {relativeTo: this.route});
  }
}