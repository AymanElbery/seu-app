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
  constructor(public admissionugService: AdmissionUGService,private appToasterService: AppToasterService,private translate: TranslateService) { }

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
    this.newRequest = (this.admissionugService.settings['ADMISSION_NEWREQ'] == 1);
  }
  addNewReq() {
    if (this.newRequest) {
      return true;
    }
    this.appToasterService.push([{ type: 'error', body: this.translate.instant('service_closed') }]);
    return false;
  }

}
