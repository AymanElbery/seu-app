import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { StudyPostponeService } from 'src/app/master-academic-requests/services/study-postpone.service';
import { studyPostpone } from 'src/app/shared/models/study-postpone';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-study-postpone',
  templateUrl: './add-study-postpone.component.html',
  styleUrls: ['./add-study-postpone.component.css']
})
export class AddStudyPostponeComponent implements OnInit {
  postpone:studyPostpone ;
  reqData: any;
  msgs: any;
  private imageSrc = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddStudyPostponeComponent>,
    private toastr: ToastrService, private acadmicProc: StudyPostponeService) { }

  ngOnInit() {
    this.postpone = { mobile:'',num_terms:'',reason:''};

    this.reqData = this.acadmicProc.reqData;
  }


  addRequest(data: any) {
    console.log(data);
    this.acadmicProc.AddRequest(data).then(res => {
      this.msgs = (res as any).messages;
      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);

      });
    });



  }
  onSubmit(form: NgForm) {
    this.addRequest(this.postpone);
    this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }

}