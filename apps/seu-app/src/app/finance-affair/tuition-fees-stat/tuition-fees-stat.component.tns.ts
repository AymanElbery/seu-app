import { Component, OnInit } from '@angular/core';
import { TuitionFeesService } from '../services/tuition-fees.service';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as utils from 'tns-core-modules/utils/utils';
import * as app from 'tns-core-modules/application';
@Component({
  selector: 'app-tuition-fees-stat',
  templateUrl: './tuition-fees-stat.component.html',
  styleUrls: ['./tuition-fees-stat.component.scss']
})
export class TuitionFeesStatComponent implements OnInit {

  feesData;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;

  constructor(private academicService: TuitionFeesService) { }
  ngOnInit() {
    this.isLoading = true;
    this.academicService.getِTuitionFeez().then(
      res => {
    this.feesData =    (res as any).data;
    this.isLoading = false;
      }
    );
    this.arabicPrint =   this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();
    const sideDrawer = app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;


  }
  onDrawerButtonTap(): void {
    const sideDrawer = app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
  onArabicPrint() {
    utils.openUrl(this.arabicPrint);
  }
  onEnglishPrint() {
    utils.openUrl(this.EngPrint);
  }
}
