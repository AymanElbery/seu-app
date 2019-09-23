import { Component, OnInit } from '@angular/core';
import { EnglishEqualizerService } from '../services/english-equalizer.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddPostponeComponent } from '../postpone-request/diag/add-postpone/add-postpone.component';
import { NgForm } from '@angular/forms';
import { AddEnglishEqualizerComponent } from './diag/add-english-equalizer/add-english-equalizer.component';

@Component({
  selector: 'app-english-equalize',
  templateUrl: './english-equalize.component.html',
  styleUrls: ['./english-equalize.component.css']
})
export class EnglishEqualizeComponent implements OnInit {

  printAR;
  reason: string;
  reqData;
  msgs;
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: EnglishEqualizerService) { }

  ngOnInit() {
this.reason = '';
this.acadmicProc.getِgetRequests().then(
      res => {
        console.log(res);
        this.acadmicProc.reqData =    (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddEnglishEqualizerComponent, dialogConfig);
  }


  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(  res => {
      this.acadmicProc.msgs = (res as any).messages;
        });
  }
  onSubmit(form: NgForm) {

this.addRequest(form.value);


  }

  print(req) {
return    this.acadmicProc.Download(req);

  }
  delete(id, index) {
    if ( confirm('هل انت متأكد')) {
    this.acadmicProc.deleteReq(id).then(res => {
      this.toastr.success('', (res as any).messages.body);

    });
    this.acadmicProc.reqData.reqs.splice(index, 1);

  }

}

}
