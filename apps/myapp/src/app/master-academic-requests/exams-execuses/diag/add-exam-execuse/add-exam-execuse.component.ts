import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { examExcuse } from 'src/app/shared/models/exam_excuse';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import {ExamsExecusesService} from '../../../services/exams-execuses.service';

@Component({
  selector: 'app-add-exam-execuse',
  templateUrl: './add-exam-execuse.component.html',
  styleUrls: ['./add-exam-execuse.component.scss']
})
export class AddExamExecuseComponent implements OnInit {

  examExcuse: examExcuse;
  reqData;
msgs: any;


  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddExamExecuseComponent>,
               private toastr: ToastrService, private acadmicProc: ExamsExecusesService ) { }

  ngOnInit() {
    this.examExcuse = {courses:[], reason: '', type:'',attachment:''};
    this.reqData = this.acadmicProc.reqData;

  }
  changeStatus(it, e) {
    if (e.target.checked) {
    
      this.examExcuse.courses.push({CRSE:it.CRN});
   
    }
    

  }

  addRequest(data: any) {
   
    this.acadmicProc.AddRequest(data).then(  res => {
    this.msgs =   (res as any).messages;
    this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);

    });
        });



  }

  onSubmit(form: NgForm) {
this.addRequest(this.examExcuse);
this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /pdf-*/;
    const reader = new FileReader();
    /* if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
     */
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.examExcuse.attachment = reader.result;
  }


}

