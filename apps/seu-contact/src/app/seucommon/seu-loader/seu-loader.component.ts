import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'seu-loader',
  templateUrl: './seu-loader.component.html',
  styleUrls: ['./seu-loader.component.css']
})
export class SeuLoaderComponent implements OnInit {

  constructor() { }
  @Input() isLoading = true;
  ngOnInit() {
  }

}
