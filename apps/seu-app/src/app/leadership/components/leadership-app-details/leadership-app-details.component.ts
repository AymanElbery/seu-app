import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadershipService } from '../../services/leadership.service';

@Component({
  selector: 'app-leadership-app-details',
  templateUrl: './leadership-app-details.component.html',
  styleUrls: ['./leadership-app-details.component.css']
})
export class LeadershipAppDetailsComponent implements OnInit {
  currentID;
  current;
  appFiles;
  isLoading = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private leadershipService: LeadershipService
  ) { 

  }

  ngOnInit() {
    this.currentID = this.route.snapshot.params['id'];
    this.loadAppFiles();
  }

  loadAppFiles() {
    this.isLoading = true;
    this.leadershipService.get_app_files_by_app_id(this.currentID).subscribe((response => {
      this.appFiles = response['data'];
      this.isLoading = false;
    }));
  }

  download(file_name) {
    this.leadershipService.file(file_name).subscribe(response => {
      if (response['status']) {
        const linkSource = `data:application/pdf;base64,${response['data']['content']}`;
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = file_name;
        downloadLink.click();
      }
    });
    return false;
  }
}