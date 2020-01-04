import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { StudyPostponeService } from 'src/app/master-academic-requests/services/study-postpone.service';
import { studyPostpone } from 'src/app/shared/models/study-postpone';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-study-postpone',
  templateUrl: './add-study-postpone.component.html',
  styleUrls: ['./add-study-postpone.component.scss']
})
export class AddStudyPostponeComponent implements OnInit {
  postpone: studyPostpone;
  reqData: any;
  msgs: any;
  private imageSrc = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddStudyPostponeComponent>,
    private toastr: AppToasterService, private acadmicProc: StudyPostponeService) { }

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