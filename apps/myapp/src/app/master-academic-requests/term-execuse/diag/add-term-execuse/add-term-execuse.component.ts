import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { termExecuse } from 'src/app/shared/models/term-execue';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import {TermExecuseService} from '../../../services/term-execuse.service';

@Component({
  selector: 'app-add-term-execuse',
  templateUrl: './add-term-execuse.component.html',
  styleUrls: ['./add-term-execuse.component.scss']
})
export class AddTermExecuseComponent implements OnInit {

  termExecuse: termExecuse;
  reqData: any;
  msgs: any;

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddTermExecuseComponent>,
               private toastr: ToastrService, private acadmicProc: TermExecuseService ) { }

  ngOnInit() {
    this.termExecuse = { reason: '',mobile:'',num_terms:''};
    this.acadmicProc.getRequest().then(
      res => {
    this.acadmicProc.reqData =    (res as any).data;
    this.acadmicProc.msgs = (res as any).messages;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
   
      }
    );
  }

  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(  res => {
      this.msgs =   (res as any).messages;
      //console.log(this.msgs);
      this.msgs.forEach((element: any) => {
       this.toastr.success('', element.body);

    });
        });



  }
  onSubmit(form: NgForm) {
    this.addRequest(this.termExecuse);
    //console.log(this.termExecuse);
    this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }


}
