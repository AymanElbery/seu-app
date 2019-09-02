import { Component, OnInit } from '@angular/core';
import { PrintService } from '../shared/services/print.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public printService: PrintService) { }

  ngOnInit() {
  }
  onPrintFile() {
    alert('start');
    const paramsData = ['101', '102'];
    alert('1');
    this.printService
      .printDocument('print-file', paramsData);
  }
}
