import { Component, OnInit, OnDestroy } from '@angular/core';
import { LectureAbsQueryService } from '../services/lecture-abs-query.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-absence-query',
  templateUrl: './absence-query.component.html',
  styleUrls: ['./absence-query.component.scss']
})
export class AbsenceQueryComponent implements OnInit, OnDestroy {

  absData;
  EngPrint: string;
  arabicPrint: string;
  status;
  isLoading = false;

  constructor(private translate: TranslateService, private academicService: LectureAbsQueryService) { }

  ngOnInit() {
    this.getRequests();
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
      this.getRequests();
    });
  }

  getRequests() {
    this.isLoading = true;
    this.academicService.getِAbsemceQuery().then(
      res => {
        this.absData = (res as any).data;
        this.status = (res as any).status;
        this.isLoading = false;
      }
    );
    this.arabicPrint = this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();
  }
  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }
  currentTab = 1;
  selectedTab(id) {
    this.currentTab = id;
  }

}
