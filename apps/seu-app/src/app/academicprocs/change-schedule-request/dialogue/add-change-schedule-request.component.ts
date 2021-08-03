import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { ChangeScheduleService } from '../../services/change-schedule-request.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-change-schedule-request',
  templateUrl: './add-change-schedule-request.component.html',
  styleUrls: ['./add-change-schedule-request.component.scss']
})
export class AddChangeScheduleRequestComponent implements OnInit {

  msgs: any;
  duration;
  dur;
  day;
  conditions;
  requesting = false;
  accept = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddChangeScheduleRequestComponent>,
    private toastr: AppToasterService, private service: ChangeScheduleService) { }

  ngOnInit() {
    this.service.getConditions().then(
      res => {
        this.conditions = (res as any).data.conditions;
      }
    );
  }

  acceptChange(e){
    this.accept = e.target.checked;
  }

  dayChange(day){
    this.service.getDurations(day).then(
      res => {
        this.duration = (res as any).data.durations[0];
      }
    );
  }

  addRequest(data: any) {
    this.service.addRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.service.newreqs = true;
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

    let data = {  day: this.day, duration: this.dur };
    this.addRequest(data);
  }

  closeDiag() {
    this.dialogRef.close();
  }
}
