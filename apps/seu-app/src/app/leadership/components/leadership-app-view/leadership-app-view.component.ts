import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadershipService } from '../../services/leadership.service';

@Component({
  selector: 'app-leadership-app-view',
  templateUrl: './leadership-app-view.component.html',
  styleUrls: ['./leadership-app-view.component.css']
})
export class LeadershipAppViewComponent implements OnInit {
  current = 'details';
  currentID;
  isLoading = false;
  currentApp;

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
    this.currentID = this.route.snapshot.children[0].params['id'];
    this.current = this.route.snapshot.children[0]['url'][0]['path']
    this.loadApp();
  }

  loadApp() {
    this.isLoading = true;
    this.leadershipService.get_app_by_id(this.currentID).subscribe((response => {
      this.currentApp = response['data'];
      this.isLoading = false;
    }));
  }

  redirectTo(code) {
    this.current = code;
    this.router.navigate(['../application-display/' + code + '/' + this.currentID], { relativeTo: this.route })
    return false;
  }
}