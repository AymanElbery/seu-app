import { Component, OnInit } from '@angular/core';
import { LeadershipService } from '../../services/leadership.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ExcelService } from '../../services/xlsx.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-leadership-add-applications',
  templateUrl: './leadership-add-applications.component.html',
  styleUrls: ['./leadership-add-applications.component.css'],
  providers: [DatePipe]
})
export class LeadershipAddApplicationsComponent implements OnInit {

  isLoading = false;
  appsList = [];
  currentad;
  constructor(
    private leadershipService: LeadershipService,
    private router: Router,
    private route: ActivatedRoute,
    private excelService: ExcelService,
    private translate: TranslateService,
    private datePipe: DatePipe
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

  exportAsXLSX(): void {
    let i = 1;
    const baseLink = environment.baselink + environment.servicesprefix + "/rest/download.php?folder=INT_JOB_APPLICATIONS&file=";
    const download = this.translate.instant("leadership.applications.download");
    const exportAppsList = this.appsList.map((app) => {
      let record = {};
      record['#'] = i;
      record[this.translate.instant("leadership.job.title")] = app['JOB_TITLE'];
      record[this.translate.instant("leadership.applications.EMPLOYEE_ID")] = app['EMPLOYEE_ID'];
      record[this.translate.instant("leadership.applications.FULL_NAME")] = app['FULL_NAME'];
      record[this.translate.instant("leadership.applications.COLLEGE")] = app['COLLEGE'];
      record[this.translate.instant("leadership.applications.DEPT")] = app['DEPT'];
      record[this.translate.instant("leadership.applications.SCALE")] = app['SCALE'];
      record[this.translate.instant("leadership.applications.PHONE")] = app['PHONE'];
      record[this.translate.instant("leadership.applications.submit_date")] = this.datePipe.transform(app['submit_date'], 'dd/MM/yyyy');
      record[this.translate.instant("leadership.applications.CV")] = `=HYPERLINK("${baseLink}${app['CV']}","${download}")`;
      record[this.translate.instant("leadership.applications.PLAN")] = `=HYPERLINK("${baseLink}${app['PLAN']}","${download}")`;
      record[this.translate.instant("leadership.applications.REASON")] = `=HYPERLINK("${baseLink}${app['REASON']}","${download}")`;
      i++;
      return record;
    });
    this.excelService.exportAsExcelFile(exportAppsList, 'ترشيحات - ' + this.leadershipService.currentAddApps['JOB_TITLE']);
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
