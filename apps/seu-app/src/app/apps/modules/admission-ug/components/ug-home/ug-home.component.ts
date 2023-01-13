import { Component, OnInit } from '@angular/core';
import { AdmissionUGService } from '../../services/admission-ug.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-ug-home',
  templateUrl: './ug-home.component.html',
  styleUrls: ['./ug-home.component.css']
})
export class UGHomeComponent implements OnInit {
  newRequest = false;
  addnewLink = '#';
  constructor(public admissionugService: AdmissionUGService, private appToasterService: AppToasterService, private translate: TranslateService) { }

  isLoading = true;
  ngOnInit() {
    this.checkForNewReqs();
    this.admissionugService.settingsObservable.subscribe(() => {
      this.checkForNewReqs();
    });
  }

  checkForNewReqs() {
    if (!this.admissionugService.settingsLoaded) {
      return;
    }
    this.isLoading = false;
    this.newRequest = (this.admissionugService.settings['ADMISSION_NEWREQ'] == 1);
    if (this.newRequest) {
      this.addnewLink = 'https://bannerssb.seu.edu.sa/PPRD_en/bwskalog.P_DispLoginNon';
    }
  }
  addNewReq() {
    if (this.newRequest) {
      return true;
    }
    this.appToasterService.push([{ type: 'error', body: this.translate.instant('service_closed') }]);
    return false;
  }

}
