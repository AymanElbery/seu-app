import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import {terminationRequest} from '../../shared/models/termination-request';
import {TerminationService} from '../services/termination.service';
import {AddTerminationRequestComponent} from './diag/add-termination-request/add-termination-request.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-termination-request',
  templateUrl: './termination-request.component.html',
  styleUrls: ['./termination-request.component.css']
})
export class TerminationRequestComponent implements OnInit {

  printAR;
  termination: terminationRequest;
  reqData;
  msgs;
  status;
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: TerminationService) { }

  ngOnInit() {
    this.termination = {reason:''};
    this.acadmicProc.getِgetRequests().then(
      res => {
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

    this.dialog.open(AddTerminationRequestComponent, dialogConfig);
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
return this.acadmicProc.Download(req);

  }
  delete(id, index) {
    if ( confirm('هل انت متأكد')) {
    this.acadmicProc.deleteReq(id).then(res => {
      this.msgs =   (res as any).messages;

      this.status =   (res as any).status;

      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);
    
        });
        if(this.status == 1)
          this.acadmicProc.reqData.requests.splice(index, 1);
    });

  }

}
call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}


}
