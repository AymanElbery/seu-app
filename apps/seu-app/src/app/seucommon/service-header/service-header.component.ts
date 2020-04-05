import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'service-header',
  templateUrl: './service-header.component.html'
})
export class ServiceHeaderComponent implements OnInit {

  constructor() { }
  @Input() title;
  @Input() desc;

  @Input() set video(name) {

  }
  @Input() set pdf(name) {

  }

  _pdf = "";
  _vedio = "";
  ngOnInit() {
  }

}
