import { Component, OnInit } from '@angular/core';
import { Lecture } from '../../shared/models/lecture';
import { CertificateIDService } from '../services/certificate-id.service';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { HttpClient } from '@angular/common/http';
import * as utils from 'tns-core-modules/utils/utils';
import { CertificateDetails } from 'src/app/shared/models/certificate-details';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-certificate-id',
  templateUrl: './certificate-id.component.tns.html',
  styleUrls: ['./certificate-id.component.tns.scss'],
  moduleId: module.id
})
export class CertificateIDComponent implements OnInit {
  isClosed: boolean;
  messagesList: any;

  constructor(private certificateIDService: CertificateIDService, private route: HttpClient,
    private downloader: DataDownLoadService,
    private transalte: TranslateService) { }
  certificateDetails: CertificateDetails = {labels: {}, values: {}};
  arabicPrint: string;
  EngPrint: string;
  printAR = '';
  printEN = '';
  isDownLoaded = false;
  lectures: Lecture[] = [ {CRN: '', CRSE_CODE: '', CRSE_DAY: '', CRSE_TIME: '', CRSE_TITLE: '', SSBSECT_CREDIT_HRS: ''}];
  isLoading = false;
  msgs=[];
  ngOnInit() {
    Downloader.init();
    this.transalte.get('general.ar_language').subscribe(res => {
      this.printAR = res;
    });
    this.transalte.get('general.en_language').subscribe(res => {
      this.printEN = res;
    });
    this.isLoading = true;
    this.arabicPrint = this.certificateIDService.DownloadCertificate();
    this.EngPrint = this.certificateIDService.DownloadEngCertificate();
    this.certificateIDService.getCertificateID().then(
      (res) => {
        if(res['status']){
          this.isClosed=false;
        console.log('resl' + res);
        this.msgs = ((res) as any).messages;
        this.certificateDetails = ((res) as any).data;
        console.log('details'+this.certificateDetails);
        this.lectures = (((res) as any).data as any).Lectures;
      }else{
        this.isClosed=true;
        this.messagesList=res['messages'];
      }
      this.isLoading = false;

    }
    );
  }
  toHTML(input): any {
    return input ? input.replace('&rarr;', '->') : '';
  }

  onArabicPrint() {
    this.downloader.downloadFile(this.arabicPrint);
    console.log('downloiad');
    this.printAR = '1%';
    this.downloader.csize.subscribe(x => {
      this.printAR = x;
      if (x == '100') {
        this.isDownLoaded = true;
        this.transalte.get('general.ar_print').subscribe(res => {
            this.printAR = res;
          }
          );

      }
    });    }
  onEnglishPrint() {
    this.downloader.downloadFile(this.EngPrint);
    this.printEN = '1%';
    this.downloader.csize.subscribe(x => {
      this.printEN = x;
      if (x == '100') {
        this.isDownLoaded = true;
        this.transalte.get('general.en_print').subscribe(res => {
            this.printEN = res;
          }
          );

      }
    });
    }
}
