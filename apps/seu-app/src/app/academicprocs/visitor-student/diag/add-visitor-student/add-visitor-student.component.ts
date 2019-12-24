import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { VisitorStudentService } from 'src/app/academicprocs/services/visitor-student.service';
import { VisitorStudent } from 'src/app/shared/models/visitor-student';
import { NgForm } from '@angular/forms';

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
    private toastr: ToastrService, private acadmicProc: VisitorStudentService) { }

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

  onSubmit(form: NgForm) {

    this.addRequest(this.visitorStudent);
    this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }


  addRequest(data: any) {
    ////console.log(data);
    this.isLoading = true;
    this.acadmicProc.AddRequest(data).then(res => {
      this.msgs = (res as any).messages;
      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);

      });

      this.isLoading = false;
    });



    //this.cmp = {camp:''};

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
