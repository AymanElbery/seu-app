import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ChangeRequest } from 'src/app/shared/models/change-request';
import { ChangeRequestService } from 'src/app/academicprocs/services/change-request.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-request-change',
  templateUrl: './add-request-change.component.html',
  styleUrls: ['./add-request-change.component.css']
})
export class AddRequestChangeComponent implements OnInit {

  //changeRequest: ChangeRequest;

  camps: any;
  cmp: { camp };
  msgs: any;
  //choosedCode:string;
  private imageSrc = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddRequestChangeComponent>,
    private toastr: AppToasterService, private acadmicProc: ChangeRequestService) { }

  ngOnInit() {
    //this.changeRequest = {camp: []};
    this.cmp = { camp: '' };
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;

        this.camps = this.acadmicProc.reqData.camps;
        this.msgs = this.acadmicProc.msgs;
        ////console.log(this.camps);
        //this.canAdd = this.reqData.can_add_new_request;
      }
    );

  }

  requesting = false;
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.dialogRef.close();
      }
      this.requesting = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }
  onSubmit(form: NgForm) {
    if (this.requesting) {
      return false;
    }

    if (this.cmp.camp == "")
      return false;
    this.requesting = true;
    this.addRequest(this.cmp);
  }

  closeDiag() {
    this.dialogRef.close();
  }
}
