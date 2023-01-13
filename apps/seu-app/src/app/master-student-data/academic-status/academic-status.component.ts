import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AcademicStatusService } from '../services/academic-status.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-academic-status',
  templateUrl: './academic-status.component.html',
  styleUrls: ['./academic-status.component.scss']
})
export class AcademicStatusComponent implements OnInit, OnDestroy {
  reqData;
  msgs;
  status;
  isLoading = false;
  constructor(private transalte: TranslateService, private toastr: AppToasterService, private stdData: AcademicStatusService) { }

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
  }
  isClosed = false;
  messagesList = [];
  getReqs() {
    this.isLoading = true;

    this.stdData.getRequests().then(
      res => {
      //  res['status'] = 0;
       // res['messages'] = [{body:"service is closed",type:"error"}];
        if (res['status']) {
        this.stdData.reqData = (res as any).data;
        this.stdData.msgs = (res as any).messages;
        this.reqData = this.stdData.reqData;
        this.msgs = this.stdData.msgs;
        this.isClosed = false;
      } else {
        this.isClosed = true;
        this.messagesList = res['messages'];
      }
        this.isLoading = false;
        // console.log(this.reqData);
      }, err => {
        this.toastr.tryagain;
        this.isLoading = false;
      }
    );
  }

}
