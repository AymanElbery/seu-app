import { Component, OnInit } from '@angular/core';
import { LeadershipService } from 'src/app/leadership/services/leadership.service';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-leadership-myapplication-view',
  templateUrl: './leadership-myapplication-view.component.html',
  styleUrls: ['./leadership-myapplication-view.component.css']
})
export class LeadershipMyapplicationViewComponent implements OnInit {

  recList;
  currentApp;
  isLoading = false;
  filesList;
  constructor(private leadershipService: LeadershipService, private router: Router, private route: ActivatedRoute,
    private translate: TranslateService, private toastr: AppToasterService
  ) {
    if (!this.leadershipService.currentApp) {
      this.back();
    }
    this.currentApp = this.leadershipService.currentApp;
  }

  ngOnInit() {
    //this.loadRec();
    this.loadFiles();
  }
  loadFiles() {
    this.isLoading = true;
    this.leadershipService.load_app_files(this.currentApp.APP_ID).subscribe(response => {
      this.filesList = response.data['files'];
      this.isLoading = false;
    },
      err => {
        this.isLoading = false;
        this.leadershipService.tryagain();
      });
  }

  loadRec() {
    // this.isLoading = true;
    // this.leadershipService.get_my_add_recommendations(this.currentApp.AD_ID).subscribe((response => {
    //   this.recList = response.data.recommendations;
    //   this.isLoading = false;
    // }));
  }

  back() {
    this.router.navigate(['../myapplications'], { relativeTo: this.route });
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
  validateFileSize(size) {
    return (size < 10000000) ? true : false;
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (['pdf'].includes(ext.toLowerCase())) {
      return true;
    }
    return false;
  }
  handleInputChange(e, settings) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!file) {
      return false;
    }
    if (!this.validateFile(file.name)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("leadership.applications.wrong_file") }]);
      return false;
    }
    if (!this.validateFileSize(file.size)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("leadership.applications.wrong_file_size") }]);
      return false;
    }
    const reader = new FileReader();
    reader.onload = (er) => {
      this.saveFile(settings, er['target']['result'],e);
    }
    reader.readAsDataURL(file);
  }
  uploading = '';
  saveFile(setting,file, e) {
    let post = {
      APP_ID: this.currentApp.APP_ID,
      FILE: file,
      IND_CODE: setting['IND_CODE']
    };
    this.uploading = setting['IND_CODE'];
    this.leadershipService.save_app_file(post).subscribe(response => {
      if (response['status']) {
        this.filesList = this.filesList.map(file => {
          if (file.IND_CODE == setting['IND_CODE']) {
            for (var prop in response['data']['file']) {
              file[prop] = response['data']['file'][prop];
            }
          }
          return file;
        });
      }
      e.srcElement.value = '';
      this.uploading = '';
    },
      err => {
        this.isLoading = false;
        this.uploading = '';
        this.leadershipService.tryagain();
      });
  }

}
