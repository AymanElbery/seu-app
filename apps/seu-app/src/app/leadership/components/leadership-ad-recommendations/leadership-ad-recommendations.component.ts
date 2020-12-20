import { Component, OnInit } from '@angular/core';
import { LeadershipService } from '../../services/leadership.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ExcelService } from '../../services/xlsx.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-leadership-ad-recommendations',
  templateUrl: './leadership-ad-recommendations.component.html',
  styleUrls: ['./leadership-ad-recommendations.component.css'],
  providers: [DatePipe]
})
export class LeadershipAdRecommendationsComponent implements OnInit {

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
    this.leadershipService.ads_recommendations(this.leadershipService.currentAddApps['ADS_PK']).subscribe((response => {
      this.appsList = response['data']['recommendations'];
      this.isLoading = false;
    }));
  }
  exportAsXLSX(){
    this.leadershipService.ads_recommendations(this.leadershipService.currentAddApps['ADS_PK'],1).subscribe((response => {
      const linkSource = `data:application/pdf;base64,${response['data']['recommendations']}`;
      const downloadLink = document.createElement("a");
      const fileName = "recommendations.xls";
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }));
  }
  exportAsXLSX_js(): void {
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

}
