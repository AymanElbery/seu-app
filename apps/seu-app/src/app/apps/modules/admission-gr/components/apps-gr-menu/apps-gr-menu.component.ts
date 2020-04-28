import { Component, OnInit } from '@angular/core';
import { AppUserService } from 'src/app/apps/services/app-user.service';
import { AdmissionGRService } from '../../services/admission-gr.service';

@Component({
  selector: 'app-apps-gr-menu',
  templateUrl: './apps-gr-menu.component.html',
  styleUrls: ['./apps-gr-menu.component.css']
})
export class AppsGrMenuComponent implements OnInit {

  constructor(public admissionGRService: AdmissionGRService, private appService: AppUserService) {
    this.isLoggedIn();
  }
  isLoggedIn() {
    if (this.admissionGRService.isLoggedIn) {
      return true;
    }
    return false;
  }
  ngOnInit() {

  }

  logout() {
    this.admissionGRService.logout();
  }

}
