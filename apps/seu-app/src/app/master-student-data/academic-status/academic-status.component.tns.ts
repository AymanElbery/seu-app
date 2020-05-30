import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AcademicStatusService } from '../services/academic-status.service';
import * as utils from 'tns-core-modules/utils/utils';
import { ValueItem, ValueList } from 'nativescript-drop-down';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import { SelectedIndexChangedEventData } from 'tns-core-modules/ui/tab-view/tab-view';
import * as app from 'tns-core-modules/application';



@Component({
  selector: 'app-academic-status',
  templateUrl: './academic-status.component.html',
  styleUrls: ['./academic-status.component.scss']
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
  terms: ValueItem<number>[] = [];
  acceptanceTerm;
  acceptanceYear: any;
  isClosed: boolean;
  messagesList: any;
  constructor(private academicStatusService: AcademicStatusService) { }

  ngOnInit() {
    const sideDrawer = app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;

    this.isLoading = true;
    this.isLoadingTerm = true;
    this.academicStatusService.getRequests().then((res) => {
      console.log(res);
     if(res['status']){
      this.isClosed=false;
      this.student = (res as any).data;
      console.log('details : ' + this.student);
      //   this.acceptanceTerm = this.student.std_adm_term_label.match(/[^0-9\/م]/g).join('');
      //  this.acceptanceYear = this.student.std_adm_term_label.match(/[0-9\/[0-9]/g).join('');
      console.log(this.acceptanceYear);

     }else{
      this.isClosed=true;
      this.messagesList=res['messages'];
    }
    this.isLoading = false;
    this.isLoadingTerm = false;
    });

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
