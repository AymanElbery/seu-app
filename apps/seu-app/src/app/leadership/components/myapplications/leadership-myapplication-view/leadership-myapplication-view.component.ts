import { Component, OnInit } from '@angular/core';
import { LeadershipService } from 'src/app/leadership/services/leadership.service';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-leadership-myapplication-view',
  templateUrl: './leadership-myapplication-view.component.html',
  styleUrls: ['./leadership-myapplication-view.component.css']
})
export class LeadershipMyapplicationViewComponent implements OnInit {

  recList;
  currentApp;
  isLoading = false;
  constructor(private leadershipService: LeadershipService, private router: Router, private route: ActivatedRoute) {
    if (!this.leadershipService.currentApp) {
      this.back();
    }
    this.currentApp = this.leadershipService.currentApp;
  }

  ngOnInit() {
    this.loadRec();
  }

  loadRec(){
    this.isLoading = true;
    this.leadershipService.get_my_add_recommendations(this.currentApp.AD_ID).subscribe((response => {
      this.recList = response.data.recommendations;
      this.isLoading = false;
    }));
  }

  back() {
    this.router.navigate(['../myapplications'], { relativeTo: this.route });
  }

  download(code) {
    const file_name = this.currentApp[code];
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


}
