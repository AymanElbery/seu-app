import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-university-agency',
  templateUrl: './university-agency.component.html',
  styleUrls: ['./university-agency.component.css']
})
export class UniversityAgencyComponent implements OnInit, OnDestroy {

  constructor(private translate: TranslateService, public dialog: MatDialog) { }
  apps = [];
  guidlines = [];
  _lang = 'ar';
  ngOnInit() {
    this.setMeatData();
    this.subscribeLangChange();
  }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.setMeatData();
      this._lang = this.translate.currentLang;
    });
  }
  setMeatData() {
    this.apps = this.translate.instant("instructions.exams.apps");
    this.guidlines = this.translate.instant("instructions.exams.GuidelinesList");
  }

}
