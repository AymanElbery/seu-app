import { Component, OnInit, OnDestroy } from '@angular/core';
import { AcademicStatusService } from '../services/academic-status.service';
import { environment } from '../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-academic-status',
  templateUrl: './academic-status.component.html',
  styleUrls: ['./academic-status.component.scss']
})
export class AcademicStatusComponent implements OnInit, OnDestroy {

  student;
  studentTerms;
  studentTermDetails;
  selectedSems;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  isLoadingTerm = false;


  constructor(private transalte: TranslateService, private academicStatusService: AcademicStatusService) {

   }
  subscriptions;
  ngOnInit() {
    this.getReqs();
    this.subscriptions = this.transalte.onLangChange.subscribe(() => {
      this.getReqs();
    });
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  getReqs() {
    this.isLoading = true;
    this.isLoadingTerm = true;
    this.academicStatusService.getStaudentStatus().then((res) => {
      this.student = (res as any).data.student;
      this.studentTerms = (res as any).data.STD_TERMS;
      this.studentTermDetails = (res as any).data.STD_TermDetails;
      this.selectedSems = this.studentTerms[0].TERM_CODE;
      this.arabicPrint = this.academicStatusService.DownloadStatus(this.selectedSems);
      this.EngPrint = this.academicStatusService.DownloadEngStatus(this.selectedSems);
      this.isLoading = false;
      this.isLoadingTerm = false;
    });
  }


  getTrmsDetails(val) {

    this.isLoadingTerm = true;
    this.arabicPrint = this.academicStatusService.DownloadStatus(this.selectedSems);
    this.EngPrint = this.academicStatusService.DownloadEngStatus(this.selectedSems);
    this.academicStatusService.getStaudentTermDetails(parseInt(val, 10)).then(
      (res) => {
        this.studentTermDetails = (res as any).data.STD_TermDetails;
        this.isLoadingTerm = false;

      }
    );
  }


  downlaodFile() {
    window.open(environment.baselink + environment.servicesprefix + '/stdservicesapi/academic_status/academic_status_print', 'MsgWindow', 'width=200,height=100');
  }
}
