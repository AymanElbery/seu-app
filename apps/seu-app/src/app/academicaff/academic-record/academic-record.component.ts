import { Component, OnInit, OnDestroy } from '@angular/core';
import { AcademicRecordService } from '../services/academic-record.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-academic-record',
  templateUrl: './academic-record.component.html',
  styleUrls: ['./academic-record.component.scss']
})
export class AcademicRecordComponent implements OnInit, OnDestroy {

  recoredData;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  constructor(private transalte: TranslateService, private academicService: AcademicRecordService) { }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  ngOnInit() {
    this.getReqs();
    this.subscriptions = this.transalte.onLangChange.subscribe(() => {
      this.getReqs();
    })
    this.arabicPrint = this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();
  }
  isClosed = false;
  messagesList = [];
  getReqs() {
    this.isLoading = true;
    this.academicService.getِAcademicRecord().then(
      res => {
       // res['status'] = 0;
        //res['messages'] = [{body:"service is closed",type:"error"}];
        if (res['status']) {
        this.recoredData = (res as any).data;
        
        this.isClosed = false;
      } else {
        this.isClosed = true;
        this.messagesList = res['messages'];
      }
        this.isLoading = false;
      }
    );
  }

}
