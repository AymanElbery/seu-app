import { Component, OnInit } from '@angular/core';
import { AdmisionUgService } from '../../services/admision-ug.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';


@Component({
  selector: 'app-match-documents',
  templateUrl: './match-documents.component.html',
  styleUrls: ['./match-documents.component.css']
})
export class MatchDocumentsComponent implements OnInit {
  subscriptionsdata:Subscription;
  info;
  messages;
  constructor(private admissionUgservice: AdmisionUgService, private router: Router,public globalService: GlobalBaseService) { }

  ngOnInit() {
    console.log("token",this.globalService.getItem("tokenKey"));
    this.subscriptionsdata= this.admissionUgservice.matchdocs(this.globalService.getItem(this.admissionUgservice.tokenKey)).subscribe(resmatch => {
      console.log("data resposne",resmatch);
      const status = resmatch['status'];
      if(resmatch['data']['info']){
        
      this.info=(resmatch as any ).data["info"]
this.messages=(resmatch as any ).data["messages"]
      console.log("data resposne",this.info,this.messages);

      }

    }
    );
  }

}
