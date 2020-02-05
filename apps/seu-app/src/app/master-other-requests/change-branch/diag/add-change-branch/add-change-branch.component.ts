import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ChangeBranchService } from 'src/app/master-other-requests/services/change-branch.service';
import { changeBranch } from 'src/app/shared/models/change-branch';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-change-branch',
  templateUrl: './add-change-branch.component.html',
  styleUrls: ['./add-change-branch.component.scss']
})
export class AddChangeBranchComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public dialogRef: MatDialogRef<AddChangeBranchComponent>,
              private toastr: AppToasterService, private acadmicProc: ChangeBranchService) { }
  printAR;
  branch: changeBranch;
  reqData;
  msgs;

  requesting = false;

  ngOnInit() {
    this.branch = { camp: '', reason: '', mobile: '' };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;

    // this.acadmicProc.getِgetRequests().then(
    //   res => {
    //     this.acadmicProc.reqData = (res as any).data;
    //     this.acadmicProc.msgs = (res as any).messages;
    //     this.reqData = this.acadmicProc.reqData;
    //     this.msgs = this.acadmicProc.msgs;

    //     //console.log(this.reqData);

    //   }
    // );
  }



  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if ((res as any).status) {
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
    this.requesting = true;
    this.addRequest(this.branch);
    // console.log(this.branch);
  }

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
  closeDiag() {
    this.dialogRef.close();
  }
}


