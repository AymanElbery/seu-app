import { Component, OnInit, Inject } from '@angular/core';
import { universityCard } from 'src/app/shared/models/university-card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddUnivCardComponent } from 'src/app/academicprocs/univ-card/diag/add-univ-card/add-univ-card.component';
import { ToastrService } from 'ngx-toastr';
import { PersonalIDService } from 'src/app/master-other-requests/services/personal-id.service';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-personal-id',
  templateUrl: './add-personal-id.component.html',
  styleUrls: ['./add-personal-id.component.scss']
})
export class AddPersonalIdComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public dialogRef: MatDialogRef<AddUnivCardComponent>,
              private toastr: AppToasterService, private univCard: PersonalIDService) { }

  card: universityCard;
  reqData;
  msgs;

  requesting = false;

  ngOnInit() {
    this.card = { name: '', phone: '', ssn: '', day: '', time: '', level: 'GR', photo: '', ssn_file: '' };
    this.univCard.getِgetRequests().then(
      res => {
        this.univCard.reqData = (res as any).data;
        this.univCard.msgs = (res as any).messages;
        this.reqData = this.univCard.reqData;
        this.msgs = this.univCard.msgs;
      }
    );
  }
  addRequest(data: any) {
    this.univCard.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
  /* comppented error found not status
      if (res.status) {
        this.univCard.newreqs = true;
        this.dialogRef.close();
      } */
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
    this.addRequest(this.card);
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
    this.card.photo = reader.result;
    // //console.log(this.card.photo);
  }
  handleInputChangeFile(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    /* if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
     */
    reader.onload = this._handleReaderLoadedFile.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoadedFile(e) {
    const reader = e.target;
    this.card.ssn_file = reader.result;
    // //console.log(this.card.photo);
  }


  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
  closeDiag() {
    this.dialogRef.close();
  }

}
