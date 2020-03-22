import { Component, OnInit } from '@angular/core';
import { TuitionFeesService } from '../services/tuition-fees.service';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as utils from 'tns-core-modules/utils/utils';
import * as app from 'tns-core-modules/application';
import { LabelsValues } from 'src/app/shared/models/labels-values';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tuition-fees-stat',
  templateUrl: './tuition-fees-stat.component.html',
  styleUrls: ['./tuition-fees-stat.component.scss']
})
export class TuitionFeesStatComponent implements OnInit {
  feesData: LabelsValues;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  msgs:[];
  printAR = '';
  printEN = '';
  isDownLoaded = false;

  constructor(private academicService: TuitionFeesService,
    private downloader: DataDownLoadService,
    private transalte: TranslateService) {
    this.feesData = {values: {}, labels: {}};
  }
  ngOnInit() {
    this.isLoading = true;
    this.academicService.getِTuitionFeez().then(
      res => {
    this.feesData =    (res as any).data;
    this.isLoading = false;
    this.msgs=(res as any).messages;
      }
    );
    this.arabicPrint =   this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();
    Downloader.init();
    this.transalte.get('general.ar_language').subscribe(res => {
      this.printAR = res;
    }
    );
    this.transalte.get('general.en_language').subscribe(res => {
      this.printEN = res;
    });


  }
  onDrawerButtonTap(): void {
    const sideDrawer = app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
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
    });  }
}
