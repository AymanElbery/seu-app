import { Component, OnInit } from '@angular/core';
import { GraduatesStateService } from '../services/graduates-state.service';

@Component({
  selector: 'app-graduate-state',
  templateUrl: './graduate-state.component.html',
  styleUrls: ['./graduate-state.component.css']
})
export class GraduateStateComponent implements OnInit {

  graduateData;
  arabicPrint: string;
  EngPrint: string;
  constructor(private graduateStateSer: GraduatesStateService) { }

  ngOnInit() {

this.arabicPrint =    this.graduateStateSer.DownloadStatement();
this.EngPrint =    this.graduateStateSer.DownloadEngStatement();

this.graduateStateSer.getStatement().then(
      (res) => {this.graduateData = (res as any).data; }
    );
  }

}
