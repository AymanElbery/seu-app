import { Component, OnInit } from '@angular/core';
import { LectureAbsQueryService } from '../services/lecture-abs-query.service';

@Component({
  selector: 'app-absence-query',
  templateUrl: './absence-query.component.html',
  styleUrls: ['./absence-query.component.css']
})
export class AbsenceQueryComponent implements OnInit {

  absData;
  EngPrint: string;
  arabicPrint: string;
  status;

  constructor(private academicService: LectureAbsQueryService) { }

  ngOnInit() {
    this.academicService.getِAbsemceQuery().then(
      res => {
    this.absData =    (res as any).data;
    console.log(this.absData.absent_percentage_total);
    this.status = (res as any).status;
      }
    );
    this.arabicPrint =   this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();
  }
  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
}

}
