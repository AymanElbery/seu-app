import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { termExecuse } from 'src/app/shared/models/term-execue';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TermExecuseService } from '../../../services/term-execuse.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-term-execuse',
  templateUrl: './add-term-execuse.component.html',
  styleUrls: ['./add-term-execuse.component.scss']
})
export class AddTermExecuseComponent implements OnInit {

  termExecuse: termExecuse;
  reqData: any;
  msgs: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddTermExecuseComponent>,
    private toastr: AppToasterService, private acadmicProc: TermExecuseService) { }

  ngOnInit() {
    this.termExecuse = { reason: '', mobile: '', num_terms: '' };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;

    // this.acadmicProc.getRequest().then(
    //   res => {
    //     this.acadmicProc.reqData = (res as any).data;
    //     this.acadmicProc.msgs = (res as any).messages;
    //     this.reqData = this.acadmicProc.reqData;
    //     this.msgs = this.acadmicProc.msgs;
    //   }
    // );
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
    this.addRequest(this.termExecuse);
  }

  closeDiag() {
    this.dialogRef.close();
  }

}
