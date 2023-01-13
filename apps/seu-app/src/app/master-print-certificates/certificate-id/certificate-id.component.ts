import { Component, OnInit, OnDestroy } from '@angular/core';
import { CertificateIDService } from '../services/certificate-id.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-certificate-id',
  templateUrl: './certificate-id.component.html',
  styleUrls: ['./certificate-id.component.scss']
})
export class CertificateIDComponent implements OnInit, OnDestroy {
  reqData;
  msgs;
  status;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;

  constructor(private transalte: TranslateService, private toastr: AppToasterService, private stdData: CertificateIDService) { }

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
    this.stdData.getRequest().then(
      res => {
        //res['status'] = 0;
        //res['messages'] = [{body:"service is closed",type:"error"}];
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

      }, err => {
        this.toastr.tryagain;
        this.isLoading = false;
      }
    );
    this.arabicPrint = this.stdData.Download();
    this.EngPrint = this.stdData.DownloadEng();
  }



}
