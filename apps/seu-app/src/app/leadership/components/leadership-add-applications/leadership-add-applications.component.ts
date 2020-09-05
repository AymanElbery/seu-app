import { Component, OnInit } from '@angular/core';
import { LeadershipService } from '../../services/leadership.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leadership-add-applications',
  templateUrl: './leadership-add-applications.component.html',
  styleUrls: ['./leadership-add-applications.component.css']
})
export class LeadershipAddApplicationsComponent implements OnInit {

  isLoading = false;
  appsList = [];
  currentad;
  constructor(
    private leadershipService: LeadershipService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (!this.leadershipService.currentAddApps) {
      this.back();
    }
    this.currentad = this.leadershipService.currentAddApps;
  }
  back() {
    this.router.navigate(['../ads'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.loadapps();
  }

  loadapps() {
    this.isLoading = true;
    this.leadershipService.ads_apps(this.leadershipService.currentAddApps['ADS_PK']).subscribe((response => {
      this.appsList = response['data']['apps'];
      this.isLoading = false;
    }));
  }

  download(file_name, code) {
    this.leadershipService.file(file_name).subscribe(response => {
      if (response['status']) {
        const linkSource = `data:application/pdf;base64,${response['data']['content']}`;
        const downloadLink = document.createElement("a");
        const fileName = code + ".pdf";
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
      }
    });
    return false;
  }

  details(app) {
    this.leadershipService.currentApp = app;
    this.router.navigate(['../application-details'], { relativeTo: this.route });
  }

}
