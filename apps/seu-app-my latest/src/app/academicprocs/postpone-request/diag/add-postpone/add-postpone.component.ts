import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TermPostponeService } from 'src/app/academicprocs/services/term-postpone.service';
import { AddRequestComponent } from 'src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component';
import { ToastrService } from 'ngx-toastr';
import { Postpone } from 'src/app/shared/models/postpone';

@Component({
  selector: 'app-add-postpone',
  templateUrl: './add-postpone.component.html',
  styleUrls: ['./add-postpone.component.css']
})
export class AddPostponeComponent implements OnInit {

  postpone: Postpone;
  reqData: any;
msgs: any;
private imageSrc = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddPostponeComponent>,
               private toastr: ToastrService, private acadmicProc: TermPostponeService ) { }

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
