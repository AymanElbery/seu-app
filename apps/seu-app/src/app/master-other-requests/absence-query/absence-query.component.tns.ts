import { Component, OnInit } from '@angular/core';
import { AbseneQueryService } from '../services/absene-query.service';
import { TranslateService } from '@ngx-translate/core';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'app-absence-query',
  templateUrl: './absence-query.component.html',
  styleUrls: ['./absence-query.component.scss']
})
export class AbsenceQueryComponent implements OnInit {
  isLoading = false;
  reqData;
  msgs;
  constructor(private otherReq: AbseneQueryService, private translate: TranslateService) {
    this.firstTabTitle = this.translate.instant('services.absence_quyery.all_lecs_asebsence_percent');
    this.secondTabTitle = this.translate.instant('services.absence_quyery.traditional_lecs_asebsence_percent');
    this.thirdTabTitle = this.translate.instant('services.absence_quyery.virtual_lecs_asebsence_percent');

   }

   absData;
  EngPrint: string;
  arabicPrint: string;
  status;
  firstTabTitle: string;
  secondTabTitle: string;
  thirdTabTitle: string;
  currentTab = 1;

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    this.isLoading = true;

    this.otherReq.getRequests().then(
      res => {
        this.absData = (res as any).data;
        //// console.log(this.absData.absent_percentage_total);
        this.status = (res as any).status;
        this.isLoading = false;
      }
    );

  }
  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }
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
