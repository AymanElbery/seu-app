import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: [ '../styles/contact.css','./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  selectedbranch;
  branchesData;
  branchesList = [];
  loading = true;
  constructor(private http: HttpClient, private dom: DomSanitizer) { }

  ngOnInit() {
    this.loading = true;
    this.http.get("/assets/branches.json").subscribe((branches) => {
      this.branchesData = branches;
      let blist = [];
      Object.keys(branches).forEach(key => {
        blist.push({ code: key, title: branches[key]['title'] });
        branches[key].maps.map(item => {
          item['url'] = this.dom.bypassSecurityTrustResourceUrl(item['url']);
          return item;
        });
      });
      this.branchesList = blist;
      this.selectedbranch = 'madina';
      this.loading = false;
    })
  }

}
