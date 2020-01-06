import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/rootservices/home.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  id: number;
  private sub: any;
  newsDetails;
  constructor(private route: ActivatedRoute, private homeservice: HomeService) { }
  LoadNews() {

    return  this.homeservice.getNews('students', 'UG', 'BU', '01F').
      then(
        res => {

          this.homeservice.reqData =    (res as any).Data;
        }
      );
    }
  ngOnInit() {
        if (this.homeservice.reqData == null) {
          this.LoadNews();
        }
        this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
      // console.log(params);
      // console.log(this.id);
      // console.log(this.homeservice.reqData);
      this.newsDetails = this.homeservice.reqData[this.id];
      // console.log(this.newsDetails);

  });
  }
  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }

}
