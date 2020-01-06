import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  public isPrinting = false;
  public test = '111';
  constructor(private router: Router) { }

  printDocument(documentName: string, documentData: string[]) {
    this.isPrinting = true;
    this.router.navigate(['/',
      {
        outlets: {
          print: ['print', documentName, documentData.join()]
        }
      }]);
    alert('nav');
  }

  onDataReady() {

    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate([{ outlets: { print: null } }]);
    });
    alert('printed');
  }
}
