import { Component, OnInit } from '@angular/core';
import { GraduatesStateService } from '../services/graduates-state.service';
import * as utils from "tns-core-modules/utils/utils";
import * as app from 'tns-core-modules/application';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import { GraduateData } from '../../shared/models/graduate-data';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-graduate-state',
  templateUrl: './graduate-state.component.tns.html',
  styleUrls: ['./graduate-state.component.tns.scss']
})
export class GraduateStateComponent implements OnInit {

  graduateData:GraduateData={values:{},labels:{}};
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  msgs=[];
  printAR = '';
  printEN = '';
  isDownLoaded = false;

  constructor(private graduateStateSer: GraduatesStateService,private downloader: DataDownLoadService,
    private transalte: TranslateService) { }

  ngOnInit() {
    Downloader.init();
    this.transalte.get('general.ar_language').subscribe(res => {
      this.printAR = res;
    });
    this.transalte.get('general.en_language').subscribe(res => {
      this.printEN = res;
    });
    this.isLoading = true;
    this.arabicPrint = this.graduateStateSer.DownloadStatement();
    this.EngPrint = this.graduateStateSer.DownloadEngStatement();

    this.graduateStateSer.getStatement().then(
      (res) => {
      this.graduateData = (res as any).data;
      this.msgs = (res as any).messages;
      this.isLoading = false;

      }
    );
  }
  onArabicPrint(){
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
  onEnglishPrint(){
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
