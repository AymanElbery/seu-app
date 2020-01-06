import { Component, OnInit } from '@angular/core';
import { ReEnroll } from 'src/app/shared/models/re-enroll';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ReEnrollService } from 'src/app/master-academic-requests/services/re-enroll.service';
import { AddReEnrollComponent } from 'src/app/master-academic-requests/re-enroll/diag/add-re-enroll/add-re-enroll.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-re-enroll',
  templateUrl: './re-enroll.component.html',
  styleUrls: ['./re-enroll.component.scss']
})
export class ReEnrollComponent implements OnInit {


  printAR;
  reEnroll: ReEnroll;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog,  private toastr: ToastrService, private acadmicProc: ReEnrollService) { }

  ngOnInit() {
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
