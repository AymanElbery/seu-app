import { Component, OnInit } from '@angular/core';
import { MedicalReportService } from '../services/medical-report.service';
import * as utils from 'tns-core-modules/utils/utils';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-medical-report',
  templateUrl: './medical-report.component.tns.html',
  styleUrls: ['./medical-report.component.tns.scss']
})
export class MedicalReportComponent implements OnInit {

  mrData;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  msgs: any;
  printAR = '';
  printEN = '';
  isDownLoaded = false;
  constructor(private academicService: MedicalReportService,
    private downloader: DataDownLoadService,
    private transalte: TranslateService) { }

  ngOnInit() {
    Downloader.init();
    this.transalte.get('general.ar_language').subscribe(res => {
      this.printAR = res;
    }
    );
    this.transalte.get('general.en_language').subscribe(res => {
      this.printEN = res;
    });
    this.isLoading = true;
    this.academicService.getِMedicalReport().then(
      res => {
    this.mrData =    (res as any).data;
    this.isLoading = false;
    this.msgs = (res as any).messages;
      }
    );
    this.arabicPrint =   this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();
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

