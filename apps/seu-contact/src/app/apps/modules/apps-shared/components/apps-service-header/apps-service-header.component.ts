import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-service-header',
  templateUrl: './apps-service-header.component.html',
  styleUrls: ['./apps-service-header.component.css']
})
export class AppsServiceHeaderComponent implements OnInit {

  @Input() title;
  @Input() subtitle;
  constructor() {
  }

  ngOnInit() {
  }

}
