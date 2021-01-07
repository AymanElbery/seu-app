import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css', '../styles/contact.css']
})
export class ContactInfoComponent implements OnInit {

  selectedbranch;
  branchesData;
  branchesList = [];
  loading = true;
  constructor(private http: HttpClient, private dom: DomSanitizer, private translate: TranslateService) { }

  ngOnInit() {
    this.getBrannhes();
    this.translate.onLangChange.subscribe(() => {
      this.getBrannhes();
    });
  }
  down() {
    document.getElementById("contact-page-form").scrollIntoView();
    return false;
  }

  getBrannhes() {
    this.loading = true;
    console.log(this.translate.currentLang);
    this.http.get("/assets/branches_" + (this.translate.currentLang) + ".json").subscribe((branches) => {
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
