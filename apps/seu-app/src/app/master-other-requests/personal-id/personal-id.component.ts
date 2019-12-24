import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { universityCard } from 'src/app/shared/models/university-card';
import { ToastrService } from 'ngx-toastr';
import { PersonalIDService } from '../services/personal-id.service';
import { AddPersonalIdComponent } from './diag/add-personal-id/add-personal-id.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-id',
  templateUrl: './personal-id.component.html',
  styleUrls: ['./personal-id.component.scss']
})
export class PersonalIDComponent implements OnInit {

  card:universityCard;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog, public receiptDiag:MatDialog ,private toastr: ToastrService, private univCard: PersonalIDService ) { }

  ngOnInit() {
    this.isLoading=true;
    this.card = {name: '', phone: '', ssn: '',day:'',time:'',level:'',photo:'',ssn_file:''};
    this.univCard.getِgetRequests().then(
      res => {
    this.univCard.reqData =    (res as any).data;
    this.univCard.msgs = (res as any).messages;
    this.reqData = this.univCard.reqData;
    this.msgs = this.univCard.msgs;
    var key=this.reqData;
    this.isLoading=false;
   //console.log(this.reqData);
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddPersonalIdComponent, dialogConfig);
  }
 

  addRequest(data) {
    this.univCard.AddRequest(data).then(  res => {
      this.univCard.msgs = (res as any).messages;
      alert(this.univCard.msgs[0]);
        });
  }
  onSubmit(form: NgForm) {
this.addRequest(form.value);


  }

  delete(id, index) {
    if ( confirm('هل انت متأكد')) {
    this.univCard.deleteReq(id).then(res => {
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
