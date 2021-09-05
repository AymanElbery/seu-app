import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { StudyPostponeCoronaService } from 'src/app/master-academic-requests/services/study-postpone-corona.service';
import { studyPostpone } from 'src/app/shared/models/study-postpone';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-study-postpone',
  templateUrl: './add-study-postpone-corona.component.html',
  styleUrls: ['./add-study-postpone-corona.component.scss']
})
export class AddStudyPostponeCoronaComponent implements OnInit {
  postpone: studyPostpone;
  reqData: any;
  msgs: any;
  private imageSrc = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddStudyPostponeCoronaComponent>,
    private toastr: AppToasterService, private acadmicProc: StudyPostponeCoronaService) { }

  ngOnInit() {
    this.postpone = { mobile: '', num_terms: '', reason: '' };

    this.reqData = this.acadmicProc.reqData;
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
    this.addRequest(this.postpone);
  }
  closeDiag() {
    this.dialogRef.close();
  }

}