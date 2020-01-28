import { Component, OnInit } from '@angular/core';
import { MedicalReportService } from '../services/medical-report.service';
import * as utils from 'tns-core-modules/utils/utils';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

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

  constructor(private academicService: MedicalReportService) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    this.isLoading=true;
    this.academicService.getِMedicalReport().then(
      res => {
    this.mrData =    (res as any).data;
    this.isLoading=false;
      }
    );
    this.arabicPrint =   this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();    
  }

  onArabicPrint() {
    utils.openUrl(this.arabicPrint);
  }
  onEnglishPrint() {
    utils.openUrl(this.EngPrint);
  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }

}
