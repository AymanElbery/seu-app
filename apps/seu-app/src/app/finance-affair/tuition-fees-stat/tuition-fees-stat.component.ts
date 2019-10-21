import { Component, OnInit } from '@angular/core';
import { TuitionFeesService } from '../tuition-fees.service';

@Component({
  selector: 'app-tuition-fees-stat',
  templateUrl: './tuition-fees-stat.component.html',
  styleUrls: ['./tuition-fees-stat.component.css']
})
export class TuitionFeesStatComponent implements OnInit {

  feesData;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;

  constructor(private academicService: TuitionFeesService) { }
  ngOnInit() {
    this.isLoading=true;
    this.academicService.getِTuitionFeez().then(
      res => {
    this.feesData =    (res as any).data;
    this.isLoading=false;
      }
    );
    this.arabicPrint =   this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();
  }

}
