import { Component, OnInit, OnDestroy } from '@angular/core';
import { GraduatesStateService } from '../services/graduates-state.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-graduate-state',
  templateUrl: './graduate-state.component.html',
  styleUrls: ['./graduate-state.component.scss']
})
export class GraduateStateComponent implements OnInit, OnDestroy {

  graduateData;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  msgs;
  constructor(
    private transalte: TranslateService, 
    private graduateStateSer: GraduatesStateService,
    private router: Router
  ) {
    this.router.navigate(['/statements']);
  }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  ngOnInit() {
    this.getReqs();
    this.subscriptions = this.transalte.onLangChange.subscribe(() => {
      this.getReqs();
    });
  }
  getReqs() {
    this.isLoading = true;
    this.arabicPrint = this.graduateStateSer.DownloadStatement();
    this.EngPrint = this.graduateStateSer.DownloadEngStatement();
    this.graduateStateSer.getStatement().then(
      (res) => {
        this.graduateData = res['data'];
        this.msgs = res['messages'];
        this.allowed = Object.keys(this.graduateData).length ? true : false;
        this.isLoading = false;
      }
    );
  }

  allowed = false;


}
