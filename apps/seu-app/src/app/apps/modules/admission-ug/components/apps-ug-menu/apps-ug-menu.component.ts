import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AdmissionUGService } from '../../services/admission-ug.service';
import { AppUserService } from 'src/app/apps/services/app-user.service';

@Component({
  selector: 'app-apps-ug-menu',
  templateUrl: './apps-ug-menu.component.html',
  styleUrls: ['./apps-ug-menu.component.css']
})
export class AppsUGMenuComponent implements OnInit , AfterContentInit {

  constructor(public admissionugService: AdmissionUGService, private appService: AppUserService) {
    this.isLoggedIn();
  }
  isLoggedIn() {
    if (this.admissionugService.isLoggedIn) {
      return true;
    }
    return false;
  }
  ngOnInit() {

  }

  ngAfterContentInit() {
    window['WindowStartSerices']();
  }

  logout() {
    this.admissionugService.logout();
  }

}
