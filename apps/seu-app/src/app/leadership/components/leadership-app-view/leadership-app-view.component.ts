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
  currentParent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private leadershipService: LeadershipService
  ) { 

  }

  ngOnInit() {
    this.currentID = this.route.snapshot.children[0].params['id'];
    this.current = this.route.snapshot.children[0]['url'][0]['path'];
    this.currentParent = this.route.snapshot['url'][0]['path'];
    this.loadApp();
  }

  back() {
    if (this.currentParent == 'application-display') {
      this.router.navigate(['../applications'], { relativeTo: this.route });
    } else if(this.currentParent == 'interview-application-display') {
      this.router.navigate(['../interview-applications'], { relativeTo: this.route });
    }
    else if(this.currentParent == 'agency-application-display') {
      this.router.navigate(['../agency-applications'], { relativeTo: this.route });
    }
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
    if (this.currentParent == 'application-display') {
      this.router.navigate(['../application-display/' + code + '/' + this.currentID], { relativeTo: this.route })
    } else if(this.currentParent == 'interview-application-display') {
      this.router.navigate(['../interview-application-display/' + code + '/' + this.currentID], { relativeTo: this.route })
    } else if(this.currentParent == 'agency-application-display') {
      this.router.navigate(['../agency-application-display/' + code + '/' + this.currentID], { relativeTo: this.route })
    }
    
    return false;
  }
}