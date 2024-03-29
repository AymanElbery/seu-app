import {Component, OnInit} from '@angular/core';
import {LeadershipService} from '../../services/leadership.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ad-final-report',
  templateUrl: './ad-final-report.component.html',
  styleUrls: ['./ad-final-report.component.css'],
})
export class AdFinalReportComponent implements OnInit {

  isLoading = false;
  appsList = [];
  currentad;
  current;
  adminApps = false;
  interviewApps = false;
  agencyApps = false;

  constructor(
    private leadershipService: LeadershipService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

    if (!this.leadershipService.currentAddApps) {
      this.back();
    }
    this.current = this.route.snapshot['url'][0]['path'];
    this.currentad = this.leadershipService.currentAddApps;

  }

  ngOnInit() {
    this.loadApps();
  }

  back() {
    this.router.navigate(['../ads'], {relativeTo: this.route});
  }

  loadApps() {
    this.isLoading = true;
    this.leadershipService.final_report(this.currentad['ADS_PK']).subscribe((response => {
      this.appsList = response['data']['apps'];
      this.isLoading = false;
    }));
  }

  exportAsXLSX() {
    this.leadershipService.final_report(this.currentad['ADS_PK'], 1).subscribe((response => {
      const linkSource = `data:application/pdf;base64,${response['data']['apps']}`;
      const downloadLink = document.createElement('a');
      const fileName = `final-report_${(new Date()).toLocaleDateString("en-US")}.xls`;
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }));
  }
}
