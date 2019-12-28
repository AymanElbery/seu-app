import { Component, OnInit, Inject } from '@angular/core';
import { Postpone } from 'src/app/shared/models/postpone';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddPostponeComponent } from 'src/app/academicprocs/postpone-request/diag/add-postpone/add-postpone.component';
import { ToastrService } from 'ngx-toastr';
import { TermPostponeService } from 'src/app/academicprocs/services/term-postpone.service';
import { NgForm } from '@angular/forms';
import { TermExecuseService } from 'src/app/academicprocs/services/term-execuse.service';

@Component({
  selector: 'app-add-execuse-term',
  templateUrl: './add-execuse-term.component.html',
  styleUrls: ['./add-execuse-term.component.css']
})
export class AddExecuseTermComponent implements OnInit {

  postpone: Postpone;
  reqData: any;
msgs: any;
private imageSrc = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddExecuseTermComponent>,
               private toastr: ToastrService, private acadmicProc: TermExecuseService ) { }

  ngOnInit() {
    this.postpone = { reason: ''};
    this.reqData = this.acadmicProc.reqData;

  }

  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(  res => {
      console.log(data);
      this.msgs =   (res as any).messages;
      console.log(this.msgs);
      this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);

    });
        });



  }
  onSubmit(form: NgForm) {
this.addRequest(form.value);
this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }
}
