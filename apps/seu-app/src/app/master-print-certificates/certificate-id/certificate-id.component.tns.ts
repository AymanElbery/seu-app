import { Component, OnInit } from '@angular/core';
import {CertificateIDService} from '../services/certificate-id.service';
import { CertificateDetails } from '../../shared/models/certificate-details';
import { Lecture } from 'src/app/shared/models/lecture';
import * as app from 'tns-core-modules/application';
import { HttpClient } from '@angular/common/http';
import * as utils from 'tns-core-modules/utils/utils';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-certificate-id',
  templateUrl: './certificate-id.component.tns.html',
  styleUrls: ['./certificate-id.component.scss']
})
export class CertificateIDComponent implements OnInit {
  reqData;
  msgs;
  status;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  printAR = '';
  printEN = '';
  isDownLoaded = false;
  isClosed: boolean;
  messagesList: any;

  constructor(private stdData: CertificateIDService,
    private downloader: DataDownLoadService,
    private transalte: TranslateService) { }

  certificateDetails: CertificateDetails;


  lectures: any[];
  ngOnInit() {
    this.isLoading = true;
    Downloader.init();
    this.transalte.get('general.ar_language').subscribe(res => {
      this.printAR = res;
    }
    );
    this.transalte.get('general.en_language').subscribe(res => {
      this.printEN = res;
    });
    this.arabicPrint = this.stdData.Download();
    this.EngPrint = this.stdData.DownloadEng();
    this.stdData.getRequest().then(
      (res) => {
      if(res['status']){
        this.isClosed=false;
        this.certificateDetails = ((res) as any).data;
        this.lectures = (((res) as any).data as any).courses;
      }else{
        this.isClosed=true;
        this.messagesList=res['messages'];
      }
      this.isLoading = false;
    }
    );
  }
  toHTML(input): any {
    return input.replace('&rarr;', '->');
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
    });
    }
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

