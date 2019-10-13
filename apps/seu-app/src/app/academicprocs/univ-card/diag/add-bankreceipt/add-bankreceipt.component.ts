import { Component, OnInit, Inject, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import {MissingUnivCardService} from '../../../services/missing-univ-card.service';
import {missingCard} from '../../../../shared/models/missing-card';
import {UnivCardComponent} from '../../../univ-card/univ-card.component';

@Component({
  selector: 'app-add-bankreceipt',
  templateUrl: './add-bankreceipt.component.html',
  styleUrls: ['./add-bankreceipt.component.css']
})
export class AddBankreceiptComponent implements OnInit {

  missingCard: missingCard;
  reqData;
  @Input() reqNo:String;
  msgs: any;
 


  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddBankreceiptComponent>,
               private toastr: ToastrService, private acadmicProc: MissingUnivCardService ) { }

  ngOnInit() {
    this.missingCard = {receipt:'',request_number:''};
  
    this.reqData = this.acadmicProc.reqData;

  }
 
    

  
  addRequest(data: any) {
   
    this.acadmicProc.AddRequest(data).then(  res => {
    this.msgs =   (res as any).messages;
    this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);
    console.log(this.missingCard);

    });
        });



  }

  onSubmit(form: NgForm) {
this.addRequest(this.missingCard);
this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
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
    this.missingCard.receipt = reader.result;
  }
}
