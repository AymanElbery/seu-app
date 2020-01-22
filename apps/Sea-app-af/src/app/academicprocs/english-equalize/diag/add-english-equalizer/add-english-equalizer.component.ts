import { Component, OnInit, Inject } from '@angular/core';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddCourseCancelComponent } from 'src/app/academicprocs/cancel-course/diag/add-course-cancel/add-course-cancel.component';
import { ToastrService } from 'ngx-toastr';
import { CancelCourseService } from 'src/app/academicprocs/services/cancel-course.service';
import { NgForm } from '@angular/forms';
import { EnglishEqualizerService } from 'src/app/academicprocs/services/english-equalizer.service';
import { EnglishEqual } from 'src/app/shared/models/english-equal';

@Component({
  selector: 'app-add-english-equalizer',
  templateUrl: './add-english-equalizer.component.html',
  styleUrls: ['./add-english-equalizer.component.css']
})
export class AddEnglishEqualizerComponent implements OnInit {

  englishEqual: EnglishEqual;
  reqData: EnglishEqual;
msgs: any;
private imageSrc = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddEnglishEqualizerComponent>,
               private toastr: ToastrService, private acadmicProc: EnglishEqualizerService ) { }

  ngOnInit() {
    this.englishEqual = {tests: [], attachment: '', ENG_TESTS: [],notes:{},crse_transfer_grades:[]};

    this.reqData = this.acadmicProc.reqData;

  }
  changeStatus(it, e) {
    if (e.target.checked) {
      it.test = it.TEST_PK;
      this.englishEqual.tests.push(it);
      ////console.log(this.englishEqual.tests);
    } else {
      for(let i = 0 ; i<this.englishEqual.tests.length;i++)
      {
        if(this.englishEqual.tests[i].test ==it.test)
          this.englishEqual.tests.splice(i, 1);

      }
    }
    ////console.log(this.englishEqual.tests);

  }

  addRequest(data: any) {
    ////console.log(data);
    this.acadmicProc.AddRequest(data).then(  res => {
   this.msgs =   (res as any).messages;
   this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);

    });
        });



  }

  onSubmit(form: NgForm) {
this.addRequest(this.englishEqual);
this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
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
    this.englishEqual.attachment = reader.result;
    ////console.log(this.englishEqual.attachment);
  }

}