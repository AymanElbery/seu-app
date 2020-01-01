import { Component, OnInit } from '@angular/core';
import { GraduatesStateService } from '../services/graduates-state.service';
import * as utils from "tns-core-modules/utils/utils";
import * as app from 'tns-core-modules/application';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';


@Component({
  selector: 'app-graduate-state',
  templateUrl: './graduate-state.component.tns.html',
  styleUrls: ['./graduate-state.component.tns.scss']
})
export class GraduateStateComponent implements OnInit {

  graduateData;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  msgs;
  constructor(private graduateStateSer: GraduatesStateService) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
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
    utils.openUrl(this.arabicPrint);
  }
  onEnglishPrint(){
    utils.openUrl(this.EngPrint);
  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
}
