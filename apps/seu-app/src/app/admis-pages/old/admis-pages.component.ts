import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admis-pages.component.html',
  styleUrls: ['./admis-pages.component.scss']
})
export class AdmisPagesComponent implements OnInit {


  urlSafe;
  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(environment.baselink + environment.appsprefix + '/admsv-pages/index.php');

  }

}
