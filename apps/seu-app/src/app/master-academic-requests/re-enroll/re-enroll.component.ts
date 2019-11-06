import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-re-enroll',
  templateUrl: './re-enroll.component.html',
  styleUrls: ['./re-enroll.component.css']
})
export class ReEnrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    this.isLoading=true;
    this.reEnroll = {proof: '', reason: '', has_proof: ''};
    this.acadmicProc.getِgetRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.isLoading=false;
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddReEnrollComponent, dialogConfig);
=======
>>>>>>> 5374cb0645610d978091338f8958fdd119714393
  }

}
