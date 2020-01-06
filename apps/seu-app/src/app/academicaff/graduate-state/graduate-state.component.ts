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

  ngOnInit() {
    this.isLoading = true;
    this.arabicPrint = this.graduateStateSer.DownloadStatement();
    this.EngPrint = this.graduateStateSer.DownloadEngStatement();
    this.graduateStateSer.getStatement().then(
      (res) => {
        this.graduateData = (res as any).data;
        this.msgs = (res as any).messages;
        this.isLoading = false;
        //// console.log(this.graduateData.length);
      }
    );
  }

}
