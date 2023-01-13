import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stds-pages',
  templateUrl: './stds-pages.component.html',
  styleUrls: ['./stds-pages.component.scss']
})
export class StdsPagesComponent implements OnInit {

  urlSafe;
  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(environment.baselink + environment.appsprefix + '/stdsnew/users/index');
  }
}
