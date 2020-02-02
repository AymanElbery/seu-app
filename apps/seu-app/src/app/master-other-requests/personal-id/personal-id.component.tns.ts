import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { universityCard } from '../../shared/models/university-card';
import { ToastrService } from 'ngx-toastr';
import { PersonalIDService } from '../services/personal-id.service';
import { AddPersonalIdComponent } from './diag/add-personal-id/add-personal-id.component.tns';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from '../../shared/services/app-toaster';

@Component({
  selector: 'app-personal-id',
  templateUrl: './personal-id.component.html',
  styleUrls: ['./personal-id.component.scss']
})
export class PersonalIDComponent implements OnInit {

  card: universityCard;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(private translate: TranslateService, public dialog: MatDialog, public receiptDiag: MatDialog, private toastr: AppToasterService, private univCard: PersonalIDService) { }

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
        //console.log(this.reqData);
      }
    );
  }
  getRequests() {
    this.isLoading = true;
    this.univCard.getِgetRequests().then(
      res => {
        this.univCard.reqData = (res as any).data;
        this.univCard.msgs = (res as any).messages;
        this.reqData = this.univCard.reqData;
        this.msgs = this.univCard.msgs;
        var key = this.reqData;
        this.isLoading = false;
      }, err => {
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';

    let dialogref = this.dialog.open(AddPersonalIdComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.univCard.newreqs) {
        this.getRequests();
        this.univCard.newreqs = false;
      }
    });
  }

  deleting = false;
  delete(id, index) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      this.univCard.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.reqData.requests.splice(index, 1);
        }
        this.deleting = false;
      }, err => {
        this.toastr.tryagain();
        this.deleting = false;
      });
    }

  }

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }


}
