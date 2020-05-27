import { Component, OnInit, OnDestroy } from '@angular/core';
import { MedicalReportService } from '../services/medical-report.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-medical-report',
  templateUrl: './medical-report.component.html',
  styleUrls: ['./medical-report.component.scss']
})
export class MedicalReportComponent implements OnInit, OnDestroy {

  mrData;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;

  constructor(private translate: TranslateService, private academicService: MedicalReportService) { }

  ngOnInit() {
    this.getRequests();
    this.subscribeLangChange();
  }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getRequests();
    });
  }
  isClosed = false;
  messagesList = [];
  getRequests() {
  this.isLoading = true;
    this.academicService.getِMedicalReport().then(
      res => {
        //res['status'] = 0;
        //res['messages'] = [{body:"service is closed",type:"error"}];
        if (res['status']) {
        this.mrData = (res as any).data;
        this.isClosed = false;
      } else {
        this.isClosed = true;
        this.messagesList = res['messages'];
      }
        this.isLoading = false;
      }
    );
    this.arabicPrint = this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();

  }

}
