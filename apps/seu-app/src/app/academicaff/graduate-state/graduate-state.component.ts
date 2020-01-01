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
    alert(this.isLoading);
    alert("constructor");


  }

  ngOnInit() {
    alert(this.isLoading);

    this.isLoading = true;
    this.arabicPrint = this.graduateStateSer.DownloadStatement();
    this.EngPrint = this.graduateStateSer.DownloadEngStatement();
    alert(this.isLoading);
    this.graduateStateSer.getStatement().then(
      (res) => {
      this.graduateData = (res as any).data;
      this.msgs = (res as any).messages;
      alert(this.isLoading);

      this.isLoading = false;
      alert(this.isLoading);

        //// console.log(this.graduateData.length);
      }
    );
  }

}
