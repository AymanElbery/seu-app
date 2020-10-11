import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-translation-view-request',
  templateUrl: './translation-view-request.component.html',
  styleUrls: ['./translation-view-request.component.css']
})
export class TranslationViewRequestComponent implements OnInit {

  request;
  constructor( 
    public dialogRef: MatDialogRef<TranslationViewRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.request = data['req'];
    console.log(this.request);
  }

  ngOnInit() {
  }

}
