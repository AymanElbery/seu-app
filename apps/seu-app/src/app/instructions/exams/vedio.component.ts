import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-vedio',
  templateUrl: './vedio.html'
})
export class VedioComponent implements OnInit {

  file;
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<VedioComponent>) {
    this.file = this.data['file'];

  }
  ngOnInit() {

  }


}
