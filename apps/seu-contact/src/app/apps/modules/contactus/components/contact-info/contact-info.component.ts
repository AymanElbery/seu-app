import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['../styles/contact.css', './contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  selectedbranch;
  branchesData;
  branchesList = [];
  loading = true;
  currLang;
  constructor(private http: HttpClient, private dom: DomSanitizer, private translate: TranslateService) { 
    // setTimeout(() => {
    //   this.down();
    // }, 1500);
  }

  ngOnInit() {
    this.getBrannhes();
    this.currLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe(() => {
      this.getBrannhes();
      this.currLang = this.translate.currentLang;
    });
    if (localStorage.getItem("contactform") == "1") {
      setTimeout(() => {
        this.down();
      }, 1500);
    }
  }
  down() {
    document.getElementById("contactfromcontainer").scrollIntoView(); //contact-page-form
    return false;
  }

  getBrannhes() {
    this.loading = true;
    this.http.get("assets/branches_" + (this.translate.currentLang) + ".json").subscribe((branches) => {
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
      this.selectedbranch = 'MainCampus';
      this.loading = false;
    })
  }

}
