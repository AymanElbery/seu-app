import { Component, OnInit } from '@angular/core';
//import { changeRequest } from 'src/app/shared/models/cancel-cousre';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ChangeRequestService } from '../services/change-request.service';
import { ChangeRequest } from 'src/app/shared/models/change-request';
import { AddRequestChangeComponent } from './diag/add-request-change/add-request-change.component';
@Component({
  selector: 'app-change-request',
  templateUrl: './change-request.component.html',
  styleUrls: ['./change-request.component.scss']
})
export class ChangeRequestComponent implements OnInit {

  //printAR;
  //changeRequest: ChangeRequest;
  reqData;
  msgs;
  status;
  isLoading = false;

  //canAdd:boolean;
  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: ChangeRequestService) { }

  ngOnInit() {
    this.isLoading=true;
    //this.changeRequest = {courses: null, agreement: 1};
    this.acadmicProc.getِgetRequests().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.isLoading=false;
    ////console.log(this.reqData.reqs);

    ////console.log(this.reqData);
    //this.canAdd = this.reqData.can_add_new_request;
      }
    );

  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddRequestChangeComponent, dialogConfig);
  }

  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(  res => {
      this.acadmicProc.msgs = (res as any).messages;
        });
  }
  onSubmit(form: NgForm) {
this.addRequest(form.value);


  }

  
  delete(id, index) {
   // //console.log(id);

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
/* call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}*/
}