import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admis-pages.component.html',
  styleUrls: ['./admis-pages.component.scss']
})
export class AdmisPagesComponent implements OnInit {


  urlSafe;
  cat;
  constructor(public sanitizer: DomSanitizer, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cat = params.get("cat")
    })
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(environment.baselink + environment.appsprefix + '/admsv-pages/index.php?cat=' + this.cat);

  }

}
