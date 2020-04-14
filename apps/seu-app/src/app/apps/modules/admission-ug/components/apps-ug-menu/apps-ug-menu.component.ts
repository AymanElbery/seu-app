import { Component, OnInit } from '@angular/core';
import { AdmisionUgService } from '../../services/admision-ug.service';
import { AppUserService } from 'src/app/apps/services/app-user.service';

@Component({
  selector: 'app-apps-ug-menu',
  templateUrl: './apps-ug-menu.component.html',
  styleUrls: ['./apps-ug-menu.component.css']
})
export class AppsUGMenuComponent implements OnInit {

  constructor(private admissionugService: AdmisionUgService, private appService: AppUserService) {
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

  logout() {
    this.admissionugService.logout();
  }

}
