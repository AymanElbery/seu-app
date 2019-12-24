import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MissingUnivCardService } from '../../../services/missing-univ-card.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { missingCard } from 'src/app/shared/models/missing-card';

@Component({
  selector: 'app-add-bank-receipt',
  templateUrl: './add-bank-receipt.component.html',
  styleUrls: ['./add-bank-receipt.component.scss']
})
export class AddBankReceiptComponent implements OnInit {

  missingCard: missingCard;
  reqData;
  msgs: any;
 


  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddBankReceiptComponent>,
               private toastr: ToastrService, private acadmicProc: MissingUnivCardService ) { }

  ngOnInit() {
    
    this.missingCard = {receipt:'',request_number:this.data};
    this.reqData = this.acadmicProc.reqData;
   
  }
 
    

  
  addRequest(data: any) {
   
    this.acadmicProc.UploadFileRequest(data).then(  res => {
    this.msgs =   (res as any).messages;
    this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);

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
