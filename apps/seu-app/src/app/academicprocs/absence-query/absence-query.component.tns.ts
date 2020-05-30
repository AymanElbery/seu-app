import { Component, OnInit } from '@angular/core';
import { LectureAbsQueryService } from '../services/lecture-abs-query.service';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { TranslateService } from '@ngx-translate/core';
import { AbsData } from '../../shared/models/absence-data';

@Component({
  selector: 'app-absence-query',
  templateUrl: './absence-query.component.tns.html',
  styleUrls: ['./absence-query.component.tns.scss']
})
export class AbsenceQueryComponent implements OnInit {
  isClosed: boolean;
  messagesList: any;


  constructor(private academicService: LectureAbsQueryService,
              private translate: TranslateService) {
      this.firstTabTitle = this.translate.instant('services.absence_quyery.all_lecs_asebsence_percent');
      this.secondTabTitle = this.translate.instant('services.absence_quyery.traditional_lecs_asebsence_percent');
      this.thirdTabTitle = this.translate.instant('services.absence_quyery.virtual_lecs_asebsence_percent');
     }

  absData:AbsData={
    absent_percentage_actual_lectures:[],
    absent_percentage_total:[],
    absent_percentage_virtual_lectures:[]
  };
  EngPrint: string;
  arabicPrint: string;
  status;
  isLoading = false;
  firstTabTitle: string;
  secondTabTitle: string;
  thirdTabTitle: string;
  currentTab = 1;

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    this.isLoading = true;
    this.academicService.getِAbsemceQuery().then(
      res => {
             // res['status']=0;
     // res['messages']=[{body:"service is closed",type:"error"}]
      if(res['status']){
        this.isClosed=false;
        this.absData = (res as any).data;
        //// console.log(this.absData.absent_percentage_total);
        this.status = (res as any).status;
      }else{
        this.isClosed=true;
        this.messagesList=res['messages'];
      }
      this.isLoading = false;

      }
    );
    this.arabicPrint = this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();

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
