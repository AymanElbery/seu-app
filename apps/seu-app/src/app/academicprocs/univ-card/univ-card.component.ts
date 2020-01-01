import { Component, OnInit } from '@angular/core';
import { universityCard } from '../../shared/models/university-card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { UvnivCardService } from '../../other-affair/services/univ-card.service';
import { AddUnivCardComponent } from './diag/add-univ-card/add-univ-card.component';
import { missingCard } from 'src/app/shared/models/missing-card';
import { MissingUnivCardService } from '../../other-affair/services/missing-univ-card.service';
@Component({
  selector: 'app-univ-card',
  templateUrl: './univ-card.component.html',
  styleUrls: ['./univ-card.component.scss']
})
export class UnivCardComponent implements OnInit {

  card: universityCard;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog, public receiptDiag: MatDialog, private toastr: ToastrService, private univCard: UvnivCardService, private missCard: MissingUnivCardService) { }

  ngOnInit() {
    this.isLoading = true;
    this.card = { name: '', phone: '', ssn: '', day: '', time: '', level: '', photo: '', ssn_file: '' };
    this.univCard.getِgetRequests().then(
      res => {
        this.univCard.reqData = (res as any).data;
        this.univCard.msgs = (res as any).messages;
        this.reqData = this.univCard.reqData;
        this.msgs = this.univCard.msgs;
        var key = this.reqData;
        this.isLoading = false;

      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    this.dialog.open(AddUnivCardComponent, dialogConfig);
  }


  addRequest(data) {
    this.univCard.AddRequest(data).then(res => {
      this.univCard.msgs = (res as any).messages;
      alert(this.univCard.msgs[0]);
    });
  }
  onSubmit(form: NgForm) {
    this.addRequest(form.value);
  }

  //   print(req) {
  // return    this.univCard.Download(req);

  //   }
  delete(id, index) {
    if (confirm('هل انت متأكد')) {
      this.univCard.deleteReq(id).then(res => {
        this.msgs = (res as any).messages;

        this.status = (res as any).status;

        this.msgs.forEach((element: any) => {
          this.toastr.success('', element.body);

        });
        //  if(this.status == 1)
        //       this.univCard.reqData.requests.splice(index, 1);
      });

    }

  }
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }

}
