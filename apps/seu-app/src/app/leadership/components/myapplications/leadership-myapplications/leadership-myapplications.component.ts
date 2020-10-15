import { Component, OnInit } from '@angular/core';
import { LeadershipService } from 'src/app/leadership/services/leadership.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leadership-myapplications',
  templateUrl: './leadership-myapplications.component.html',
  styleUrls: ['./leadership-myapplications.component.css']
})
export class LeadershipMyapplicationsComponent implements OnInit {


  isLoading = false;
  appsList = [];
  constructor(
    private leadershipService: LeadershipService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadapps();
  }

  loadapps() {
    this.isLoading = true;
    this.leadershipService.myapplications().subscribe((response => {
      this.appsList = response['data']['apps'];
      this.isLoading = false;
    }), err => {
      this.isLoading = false;
      this.leadershipService.tryagain();
    });
  }

  delete(id) {
    this.isLoading = true;
    this.leadershipService.delete_app(id).subscribe((response => {
      this.isLoading = false;
      this.loadapps();
    }), err => {
      this.isLoading = false;
      this.leadershipService.tryagain();
    });
  }

  details(app) {
    this.leadershipService.currentApp = app;
    this.router.navigate(['../myapplication-details'], { relativeTo: this.route });
  }

}
