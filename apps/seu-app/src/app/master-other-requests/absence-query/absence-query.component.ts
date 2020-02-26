import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbseneQueryService } from '../services/absene-query.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-absence-query',
  templateUrl: './absence-query.component.html',
  styleUrls: ['./absence-query.component.scss']
})
export class AbsenceQueryComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  reqData;
  msgs;
  constructor(private translate: TranslateService, private toastr: AppToasterService,
    private otherReq: AbseneQueryService) { }

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

  getRequests() {

    this.isLoading = true;

    this.otherReq.getRequests().then(
      res => {
        this.otherReq.reqData = (res as any).data;
        this.otherReq.msgs = (res as any).messages;
        this.reqData = this.otherReq.reqData;
        this.msgs = this.otherReq.msgs;
        this.isLoading = false;
        console.log(this.reqData);
      }, err => {
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }

}
