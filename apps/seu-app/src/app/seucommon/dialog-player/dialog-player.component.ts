import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-dialog-player',
  templateUrl: './dialog-player.component.html',
  styleUrls: ['./dialog-player.component.css']
})
export class DialogPlayerComponent implements OnInit {
  vedio_url;
  constructor(@Inject(MAT_DIALOG_DATA) public data,public sanitizer: DomSanitizer, public dialogRef: MatDialogRef<DialogPlayerComponent>) {
    this.vedio_url=this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url);
    //console.log(this.vedio_url);
   }

  ngOnInit() {  
    
  }
  closeDiag() {
    this.dialogRef.close();
  }

}
