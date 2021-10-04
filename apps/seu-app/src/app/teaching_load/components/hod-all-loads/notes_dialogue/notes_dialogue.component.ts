import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dean-reason',
  templateUrl: './notes_dialogue.component.html',
  styleUrls: ['./notes_dialogue.component.css']
})
export class DeanReasonComponent implements OnInit {

  isLoading = false;
  reason;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DeanReasonComponent>
  ) {
      this.reason = this.data.reason;
  }
  ngOnInit() {
  }

  closeDiag() {
    this.dialogRef.close(true);
  }

}
