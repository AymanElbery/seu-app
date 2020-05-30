import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'seu-flash',
  templateUrl: './seu-flash.component.html',
  styleUrls: ['./seu-flash.component.css']
})
export class SeuFlashComponent implements OnInit {

  constructor() { }
  @Input() msgs = [];
  @Input() isLoading = false;
  ngOnInit() {
  }

}
