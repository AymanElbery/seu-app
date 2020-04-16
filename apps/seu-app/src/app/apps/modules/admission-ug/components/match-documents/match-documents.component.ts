import { Component, OnInit } from '@angular/core';
import { AdmisionUgService } from '../../services/admision-ug.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';


@Component({
  selector: 'app-match-documents',
  templateUrl: './match-documents.component.html',
  styleUrls: ['./match-documents.component.css']
})
export class MatchDocumentsComponent implements OnInit {
  subscriptionsdata: Subscription;
  info;
  messages;
  messageNodata;
  isLoading = false;
  constructor(private toastr: AppToasterService, private admissionUgservice: AdmisionUgService, private router: Router, public globalService: GlobalBaseService) { }

  ngOnInit() {
    this.matchdocs();
  }
  post = '';
  matchdocs() {
    this.isLoading = true;
    this.subscriptionsdata = this.admissionUgservice.matchdocs(this.globalService.getItem(this.admissionUgservice.tokenKey)).subscribe(resmatch => {
      const status = resmatch['status'];
      if (status == 1) {
        if (resmatch['data']['info']) {
          this.info = (resmatch as any).data["info"]
          this.messages = (resmatch as any).data["messages"]
          this.isLoading = false
        }
        this.post = 'success';
      }
      if (status == 0) {
        this.messageNodata = (resmatch as any).data["messages"];
        this.isLoading = false
        this.post = 'fail';
      }
    },
      err => {
        this.toastr.tryagain();
        this.isLoading = false

      }
    );
  }
}
