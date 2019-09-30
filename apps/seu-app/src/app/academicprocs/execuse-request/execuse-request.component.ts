import { Component, OnInit } from '@angular/core';
import { TermExecuseService } from '../services/term-execuse.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddPostponeComponent } from '../postpone-request/diag/add-postpone/add-postpone.component';
import { NgForm } from '@angular/forms';
import { AddExecuseTermComponent } from './diag/add-execuse-term/add-execuse-term.component';

@Component({
  selector: 'app-execuse-request',
  templateUrl: './execuse-request.component.html',
  styleUrls: ['./execuse-request.component.css']
})
export class ExecuseRequestComponent implements OnInit {

  reason: string;
  reqData;
  msgs;
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: TermExecuseService) { }

  ngOnInit() {
this.reason = '';
this.acadmicProc.getِgetRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    //console.log(this.reqData.reqs);
        
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddExecuseTermComponent, dialogConfig);
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
      this.msgs =   (res as any).messages;

      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);
    
        });

    });
    this.acadmicProc.reqData.reqs.splice(index, 1);

  }

}

}
