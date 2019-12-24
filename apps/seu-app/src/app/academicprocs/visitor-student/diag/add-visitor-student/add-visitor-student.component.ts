import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { VisitorStudentService } from 'src/app/academicprocs/services/visitor-student.service';
import { VisitorStudent } from 'src/app/shared/models/visitor-student';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-visitor-student',
  templateUrl: './add-visitor-student.component.html',
  styleUrls: ['./add-visitor-student.component.scss']
})
export class AddVisitorStudentComponent implements OnInit {

  visitorStudent: VisitorStudent
  reqData: any;
  msgs: any;
  universitiesList: any;
  termList: any;
  yearList: any;
  coursesList: any;
  isLoading = false;
  approves:{approve};
 

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddVisitorStudentComponent>,
    private toastr: AppToasterService, private acadmicProc: VisitorStudentService) { }

  ngOnInit() {
    this.approves={approve:false};
    this.visitorStudent = { university: '', term: '', year: '', course_name: '', course_symbol: '', course_code: '', course_equal: '', hours: 0, attachment: '' };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.universitiesList = this.acadmicProc.reqData.universities_list;
    this.termList = this.acadmicProc.reqData.term_list;
    this.yearList = this.acadmicProc.reqData.year_list;
    this.coursesList = this.acadmicProc.reqData.courses_list;
  }

  closeDiag() {
    this.dialogRef.close();
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
    this.addRequest(this.visitorStudent);
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
    this.visitorStudent.attachment = reader.result;
    //console.log(this.visitorStudent.attachment);
  }

}
