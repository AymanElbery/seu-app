import { Component, OnInit } from '@angular/core';
import { AcademicStatusService } from '../services/academic-status.service';
import { FormsModule } from '@angular/forms';
import * as app from 'tns-core-modules/application';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as utils from 'tns-core-modules/utils/utils';
import { ValueList, ValueItem, SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { Student } from '../../shared/models/student';
import { StudentTerms } from '../../shared/models/student-terms';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-academic-status',
  templateUrl: './academic-status.component.tns.html',
  styleUrls: ['./academic-status.component.tns.scss']
})
export class AcademicStatusComponent implements OnInit {

  printAR = '';
  printEN = '';
  isDownLoaded = false;

  student: Student = {
    acadimic_position: '',
    acadimic_position_label: '',
    current_acadimic_status: '',
    current_acadimic_status_label: '',
    final_graduation_GPA: '',
    name: '',
    ssn: '',
    std_adm_term_code: '',
    std_adm_term_label: '',
    std_fees: '',
    std_id: ''
};
  studentTerms = [];
  studentTermDetails: StudentTerms = {
    ACADIMICPOSITION: '',
    CAMP_code: '',
    COLL_CODE: '',
    MAJR_code: '',
    RegisterationStatus: '',
    STD_UGGR: '',
    acadimic_status: '',
    gba: '',
    study_level: ''
  };
  selectedSems;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  isLoadingTerm = false;
  studentTermsDropDown;
  terms: ValueItem<number>[] = [];
  acceptanceTerm;
  acceptanceYear: any;
  constructor(private transalte: TranslateService,
              private academicStatusService: AcademicStatusService,
              private downloader: DataDownLoadService) { }

  ngOnInit() {
    Downloader.init();
    this.transalte.get('general.ar_language').subscribe(res => {
      this.printAR = res;
    }
    );
    this.isLoading = true;
    this.isLoadingTerm = true;
    this.academicStatusService.getStaudentStatus().then((res) => {
      this.student = (res as any).data.student;
      this.acceptanceTerm = this.student.std_adm_term_label.match(/[^0-9\/م]/g).join('');
      this.acceptanceYear = this.student.std_adm_term_label.match(/[0-9\/[0-9]/g).join('');
      console.log(this.acceptanceYear);
      this.studentTerms = (res as any).data.STD_TERMS;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.studentTerms.length; i++) {
        this.terms.push(
          {
            value: this.studentTerms[i].TERM_CODE,
            display: this.studentTerms[i].TERM_DESC
          }
        );
      }
      this.studentTermsDropDown = new ValueList(this.terms);

      this.studentTermDetails = (res as any).data.STD_TermDetails;
      this.selectedSems = this.studentTerms[0].TERM_CODE;
      this.arabicPrint = this.academicStatusService.DownloadStatus(this.selectedSems);
      this.EngPrint = this.academicStatusService.DownloadEngStatus(this.selectedSems);
      this.isLoading = false;
      this.isLoadingTerm = false;
    });

  }

  getTrmsDetails(val: SelectedIndexChangedEventData) {
    const code = this.studentTermsDropDown.getValue(val.newIndex);
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
  onArabicPrint() {
    console.log('araaaaaaaaaaaabic', this.arabicPrint);
 //   utils.openUrl(this.EngPrint);


    this.downloader.downloadFile(this.arabicPrint);
    console.log('downloiad');
    this.printAR = '1%';
    this.downloader.csize.subscribe(x => {
      console.log(x);
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
    console.log('downloiad');
    this.printEN = '1%';
    this.downloader.csize.subscribe(x => {
      console.log(x);
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
