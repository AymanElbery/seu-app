import { Component, OnInit, OnDestroy } from '@angular/core';
import { LectureAbsQueryService } from '../services/lecture-abs-query.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-absence-query',
  templateUrl: './absence-query.component.html',
  styleUrls: ['./absence-query.component.scss']
})
export class AbsenceQueryComponent implements OnInit, OnDestroy {

  reqData;
  msgs = [];
  EngPrint: string;
  arabicPrint: string;
  status;
  isLoading = false;

  constructor(private translate: TranslateService, private toastr: AppToasterService, private academicService: LectureAbsQueryService) { }

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
    this.academicService.getِAbsemceQuery().then(
      res => {
        //res['status'] = 0;
       //res['messages'] = [{body:"service is closed",type:"error"}];
       if (res['status']) {
        this.reqData = (res as any).data;
        this.status = (res as any).status;
        this.isClosed = false;
      } else {
        this.isClosed = true;
        this.messagesList = res['messages'];
      }
        this.isLoading = false;
      }, err => {
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }

}
