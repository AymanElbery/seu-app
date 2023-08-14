import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { AdmitionPostponeService } from 'src/app/master-academic-requests/services/admition-postpone.service';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-admition-postpone',
  templateUrl: './add-admition-postpone.component.html',
  styleUrls: ['./add-admition-postpone.component.css']
})
export class AddAdmitionPostponeComponent implements OnInit {
  postpone: any;
  reqData: any;
  msgs: any;
  private imageSrc = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddAdmitionPostponeComponent>,
    private toastr: AppToasterService, private acadmicProc: AdmitionPostponeService) { }

  ngOnInit() {
    this.postpone = {reason: '' };

    this.reqData = this.acadmicProc.reqData;
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
    this.requesting = true;
    this.addRequest(this.postpone);
  }
  closeDiag() {
    this.dialogRef.close();
  }

}