import { Component, OnInit } from '@angular/core';
import { AcademicStatusService } from '../services/academic-status.service';
import { FormsModule } from '@angular/forms';
import * as app from 'tns-core-modules/application';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as utils from "tns-core-modules/utils/utils";
import { ValueList, ValueItem, SelectedIndexChangedEventData } from "nativescript-drop-down";


@Component({
  selector: 'app-academic-status',
  templateUrl: './academic-status.component.tns.html',
  styleUrls: ['./academic-status.component.tns.scss']
})
export class AcademicStatusComponent implements OnInit {

  student;
  studentTerms;
  studentTermDetails;
  selectedSems;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  isLoadingTerm = false;
  studentTermsDropDown;
  terms:ValueItem<number>[]=[];

  constructor(private academicStatusService: AcademicStatusService) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;

    this.isLoading = true;
    this.isLoadingTerm = true;
    this.academicStatusService.getStaudentStatus().then((res) => {
      this.student = (res as any).data.student;
      this.studentTerms = (res as any).data.STD_TERMS;
      for(let i=0;i<this.studentTerms.length;i++){
        this.terms.push(
          {
            value:this.studentTerms[i].TERM_CODE,
            display:this.studentTerms[i].TERM_DESC
          }
        );
      }
      this.studentTermsDropDown=new ValueList(this.terms);

      this.studentTermDetails = (res as any).data.STD_TermDetails;
      this.selectedSems = this.studentTerms[0].TERM_CODE;
      this.arabicPrint = this.academicStatusService.DownloadStatus(this.selectedSems);
      this.EngPrint = this.academicStatusService.DownloadEngStatus(this.selectedSems);
      this.isLoading = false;
      this.isLoadingTerm = false;
    });
    
  }

  getTrmsDetails(val:SelectedIndexChangedEventData) {
    let code=this.studentTermsDropDown.getValue(val.newIndex);
    this.isLoadingTerm = true;
    this.arabicPrint = this.academicStatusService.DownloadStatus(code);
    this.EngPrint = this.academicStatusService.DownloadEngStatus(code);
    
    this.academicStatusService.getStaudentTermDetails(code).then(
      (res) => {
        this.studentTermDetails = (res as any).data.STD_TermDetails;
        this.isLoadingTerm = false;

      }
    );
  }

  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
  onArabicPrint(){
    utils.openUrl(this.arabicPrint);
  }
  onEnglishPrint(){
    utils.openUrl(this.EngPrint);
  }
}
