import { Component, OnInit } from '@angular/core';
import { GraduatesStateService } from '../services/graduates-state.service';


@Component({
  selector: 'app-graduate-state',
  templateUrl: './graduate-state.component.html',
  styleUrls: ['./graduate-state.component.scss']
})
export class GraduateStateComponent implements OnInit {

  graduateData;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  msgs;
  constructor(private graduateStateSer: GraduatesStateService) {

  }
  allowed = false;
  ngOnInit() {
    this.isLoading = true;
    this.arabicPrint = this.graduateStateSer.DownloadStatement();
    this.EngPrint = this.graduateStateSer.DownloadEngStatement();
    this.graduateStateSer.getStatement().then(
      (res) => {
        this.graduateData = res['data'];
        this.msgs = res['messages'];

        this.allowed = (this.graduateData.keys.length) ? true : false;
        this.isLoading = false;
      }
    );
  }

}
