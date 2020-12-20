import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadershipService } from '../../services/leadership.service';

@Component({
  selector: 'app-leadership-agency-interview',
  templateUrl: './leadership-agency-interviews.component.html',
  styleUrls: ['./leadership-agency-interviews.component.css']
})
export class LeadershipAgencyInterviewsComponent implements OnInit {

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
    this.loadAgencyCurrentAds();
  }

  loadAgencyCurrentAds() {
    this.isLoading = true;
    this.leadershipService.loadAgencyCurrentAds().subscribe((response => {
      this.adsList = response['data']['ads'];
      this.isLoading = false;
    }));
  }

  applications(ad) {
    this.leadershipService.currentAddApps = ad;
    this.router.navigate(['../agency-applications'], {relativeTo: this.route});
  }
}