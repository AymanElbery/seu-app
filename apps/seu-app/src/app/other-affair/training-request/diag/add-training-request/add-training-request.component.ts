import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TrainingRequestService } from '../../../services/training-request.service';
import { training } from '../../../../shared/models/training';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-training-request',
  templateUrl: './add-training-request.component.html',
  styleUrls: ['./add-training-request.component.scss']
})
export class AddTrainingRequestComponent implements OnInit {

  printAR;
  training: training;
  reqData;
  msgs;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddTrainingRequestComponent>,
    private toastr: AppToasterService, private acadmicProc: TrainingRequestService) { }

  ngOnInit() {
    this.training = { organization: '' };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
  }


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

  requesting = false;
  onSubmit(form: NgForm) {
    if (this.requesting) {
      return false;
    }

    this.requesting = true;
    this.addRequest(this.training);

  }

  print(req) {
    return this.acadmicProc.Download(req);

  }

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
  closeDiag() {
    this.dialogRef.close();
  }

}
