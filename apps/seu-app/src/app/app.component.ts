import { Component } from '@angular/core';
import { PrintService } from './shared/services/print.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seu-app';
  print: PrintService;
  constructor(private printService: PrintService) {
this.print = printService;

   }

}
