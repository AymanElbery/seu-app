import { Component, OnInit } from '@angular/core';
import { AdmissionUGService } from '../../services/admission-ug.service';

@Component({
  selector: 'app-ug-home',
  templateUrl: './ug-home.component.html',
  styleUrls: ['./ug-home.component.css']
})
export class UGHomeComponent implements OnInit {
  newRequest = false;
  constructor(public admissionugService: AdmissionUGService) { }

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

}
