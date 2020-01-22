import { Component, OnInit, Inject } from '@angular/core';
import { universityCard } from 'src/app/shared/models/university-card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddUnivCardComponent } from 'src/app/academicprocs/univ-card/diag/add-univ-card/add-univ-card.component';
import { ToastrService } from 'ngx-toastr';
import { PersonalIDService } from 'src/app/master-other-requests/services/personal-id.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-personal-id',
  templateUrl: './add-personal-id.component.html',
  styleUrls: ['./add-personal-id.component.css']
})
export class AddPersonalIdComponent implements OnInit {

  card: universityCard;
  reqData;
  msgs;
  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddUnivCardComponent>,
               private toastr: ToastrService,  private univCard: PersonalIDService) { }

  ngOnInit() {
    this.card = {name: '', phone: '', ssn: '', day: '', time: '', level: '', photo: '', ssn_file: ''};
    this.univCard.getِgetRequests().then(
      res => {
    this.univCard.reqData =    (res as any).data;
    this.univCard.msgs = (res as any).messages;
    this.reqData = this.univCard.reqData;
    this.msgs = this.univCard.msgs;


  }
    );
  }



  addRequest(data) {
    this.univCard.AddRequest(data).then(  res => {
      this.univCard.msgs = (res as any).messages;
      this.msgs = this.univCard.msgs;
      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);

        });
    });

  }
  onSubmit(form: NgForm) {
this.addRequest(this.card);
//console.log(this.card);
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
    reader.onload = this. _handleReaderLoadedFile.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoadedFile(e) {
    const reader = e.target;
    this.card.ssn_file = reader.result;
    // //console.log(this.card.photo);
  }



  delete(id, index) {
    if ( confirm('هل انت متأكد')) {
    this.univCard.deleteReq(id).then(res => {
      this.toastr.success('', (res as any).messages.body);

    });
    this.univCard.reqData.reqs.splice(index, 1);

  }

}
call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}
closeDiag() {
  this.dialogRef.close();
}

}