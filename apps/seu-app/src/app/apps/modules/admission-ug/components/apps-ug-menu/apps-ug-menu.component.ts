import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AdmissionUGService } from '../../services/admission-ug.service';
import { AppUserService } from 'src/app/apps/services/app-user.service';

@Component({
  selector: 'app-apps-ug-menu',
  templateUrl: './apps-ug-menu.component.html',
  styleUrls: ['./apps-ug-menu.component.css']
})
export class AppsUGMenuComponent implements OnInit, AfterContentInit {
  newRequest = false;
  constructor(public admissionugService: AdmissionUGService, private appService: AppUserService) {
    //this.isLoggedIn();
  }
  isLoggedIn() {
    if (this.admissionugService.isLoggedIn) {
      return true;
    }
    return false;
  }
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

  ngAfterContentInit() {
    window['WindowStartSerices']();
  }

  logout() {
    this.admissionugService.logout();
    return false;
  }

}
