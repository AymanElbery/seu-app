import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from 'src/app/shared/services/print.service';

@Component({
  selector: 'app-print-file',
  templateUrl: './print-file.component.html',
  styleUrls: ['./print-file.component.css']
})
export class PrintFileComponent implements OnInit {

  paramIds: string[];
  dataDetails: Promise<any>[];

  constructor(route: ActivatedRoute,
              public printService: PrintService) {
alert('p');
console.log(route.snapshot.params.paramData);
this.paramIds = route.snapshot.params.paramData
      .split(',');

alert(this.paramIds);
  }

  ngOnInit() {
    alert('h');
    // this.dataDetails = this.paramIds
    //   .map(id => this.getDetails(id));
    // Promise.all(this.dataDetails)
    //   .then(() => this.printService.onDataReady());
    this.printService.onDataReady();
  }

  getDetails(invoiceId) {
    const amount = Math.floor((Math.random() * 100));
    return new Promise(resolve =>
      setTimeout(() => resolve({amount}), 1000)
    );
  }

}
