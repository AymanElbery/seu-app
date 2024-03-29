import { Component, OnInit, Inject } from '@angular/core';
import { universityCard } from 'src/app/shared/models/university-card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { UvnivCardService } from '../../../services/univ-card.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-univ-card',
  templateUrl: './add-univ-card.component.html',
  styleUrls: ['./add-univ-card.component.scss']
})
export class AddUnivCardComponent implements OnInit {


  card: universityCard;
  reqData;
  msgs;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddUnivCardComponent>,
    private toastr: AppToasterService, private univCard: UvnivCardService) { }

  ngOnInit() {
    this.card = { name: '', phone: '', ssn: '', day: '', time: '', level: 'UG', photo: '', ssn_file: '' };

    this.reqData = this.univCard.reqData;
    this.msgs = this.univCard.msgs;

  }


  requesting = false;
  addRequest(data: any) {
    this.univCard.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.univCard.newreqs = true;
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


  //   print(req) {
  // return    this.univCard.Download(req);

  //   }

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
  closeDiag() {
    this.dialogRef.close();
  }

}
