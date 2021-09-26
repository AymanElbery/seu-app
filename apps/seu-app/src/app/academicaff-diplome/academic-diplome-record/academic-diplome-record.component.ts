import { Component, OnInit, OnDestroy } from '@angular/core';
import { AcademicDiplomeRecordService } from '../services/academic-diplome-record.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-academic-diplome-record',
  templateUrl: './academic-diplome-record.component.html',
  styleUrls: ['./academic-diplome-record.component.scss']
})
export class AcademicRecordDiplomeComponent implements OnInit, OnDestroy {

  recoredData;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  constructor(private transalte: TranslateService, private academicService: AcademicDiplomeRecordService) { }

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
