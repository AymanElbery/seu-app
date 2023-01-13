import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { termExecuse } from 'src/app/shared/models/term-execue';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TermExecuseCoronaService } from '../../../services/term-execuse-corona.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-term-execuse',
  templateUrl: './add-term-execuse-corona.component.html',
  styleUrls: ['./add-term-execuse-corona.component.scss']
})
export class AddTermExecuseCoronaComponent implements OnInit {

  termExecuse: termExecuse;
  reqData: any;
  msgs: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddTermExecuseCoronaComponent>,
    private toastr: AppToasterService, private acadmicProc: TermExecuseCoronaService) { }

  ngOnInit() {
    this.termExecuse = { reason: '', mobile: '', num_terms: '' };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
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
