import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../../services/app-user.service';

@Component({
  selector: 'app-apps-landing',
  templateUrl: './apps-landing.component.html',
  styleUrls: ['./apps-landing.component.css']
})
export class AppsLandingComponent implements OnInit {

  constructor(public appUser:AppUserService) { }
  isLoading = true;
  ngOnInit() {
    this.isLoading = false;
  }

}
