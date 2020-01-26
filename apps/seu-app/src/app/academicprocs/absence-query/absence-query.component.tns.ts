import { Component, OnInit } from '@angular/core';
import { LectureAbsQueryService } from '../services/lecture-abs-query.service';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';

@Component({
  selector: 'app-absence-query',
  templateUrl: './absence-query.component.tns.html',
  styleUrls: ['./absence-query.component.tns.scss']
})
export class AbsenceQueryComponent implements OnInit {

  absData;
  EngPrint: string;
  arabicPrint: string;
  status;
  isLoading = false;

  constructor(private academicService: LectureAbsQueryService) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    this.isLoading = true;

    this.academicService.getِAbsemceQuery().then(
      res => {
        this.absData = (res as any).data;
        ////console.log(this.absData.absent_percentage_total);
        this.status = (res as any).status;
        this.isLoading = false;
      }
    );
    this.arabicPrint = this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();
  }
  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }
  currentTab = 1;
  selectedTab(id) {
    this.currentTab = id;
  }

  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
}


onArabicPrint() {
    utils.openUrl(this.arabicPrint);
  }
  onEnglishPrint() {
    utils.openUrl(this.EngPrint);
  }
}
