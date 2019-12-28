import { Component, OnInit } from '@angular/core';
import { universityCard } from 'src/app/shared/models/university-card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MissingUnivCardService } from '../../../other-affair/services/missing-univ-card.service';
import {AddBankReceiptComponent} from '../diag/add-bank-receipt/add-bank-receipt.component'
import {AddMissingCardDataComponent} from '../diag/add-missing-card-data/add-missing-card-data.component';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-missing-card',
  templateUrl: './missing-card.component.html',
  styleUrls: ['./missing-card.component.scss']
})
export class MissingCardComponent implements OnInit {

  card:universityCard;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog, public receiptDiag:MatDialog ,private toastr: ToastrService ,private missCard:MissingUnivCardService) { }

  ngOnInit() {
    this.isLoading=true;
    this.card = {name: '', phone: '', ssn: '',day:'',time:'',level:'',photo:'',ssn_file:''};
    this.missCard.getِgetRequests().then(
      res => {
    this.missCard.reqData =    (res as any).data;
    this.missCard.msgs = (res as any).messages;
    this.reqData = this.missCard.reqData;
    this.msgs = this.missCard.msgs;
    this.isLoading=false;
   
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddMissingCardDataComponent, dialogConfig);
  }
  openDialogeBankreceipt(id) {
    const diagConfig = new MatDialogConfig();
    diagConfig.autoFocus = true;
    diagConfig.disableClose = true;
    diagConfig.width = '50%';
    diagConfig.data=(id);
    this.receiptDiag.open(AddBankReceiptComponent, diagConfig);
  }

  addRequest(data) {
    this.missCard.AddRequest(data).then(  res => {
      this.missCard.msgs = (res as any).messages;
      alert(this.missCard.msgs[0]);
        });
  }
  onSubmit(form: NgForm) {
this.addRequest(form.value);


  }

//   print(req) {
// return    this.univCard.Download(req);

//   }
  delete(id, index) {
    if ( confirm('هل انت متأكد')) {
    this.missCard.deleteReq(id).then(res => {
      this.msgs =   (res as any).messages;
      this.status =   (res as any).status;
      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);
    
        });
        //  if(this.status == 1)
        //       this.univCard.reqData.requests.splice(index, 1);
    });

  }

}
call(hr) {
return  Math.floor(Math.random() * 10) + hr ;

}


}
