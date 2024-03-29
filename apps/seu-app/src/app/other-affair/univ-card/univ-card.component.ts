import { Component, OnInit } from '@angular/core';
import { universityCard } from '../../shared/models/university-card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { UvnivCardService } from '../services/univ-card.service';
import { AddUnivCardComponent } from './diag/add-univ-card/add-univ-card.component';
import { missingCard } from 'src/app/shared/models/missing-card';
import { MissingUnivCardService } from '../services/missing-univ-card.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(private translate: TranslateService,public dialog: MatDialog, public receiptDiag: MatDialog, private toastr: AppToasterService, private univCard: UvnivCardService) { }

  ngOnInit() {
    this.card = { name: '', phone: '', ssn: '', day: '', time: '', level: '', photo: '', ssn_file: '' };
    this.getRequests();
    this.subscribeLangChange();
  }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getRequests();
    });
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
        //console.log(this.reqData);
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';

    let dialogref = this.dialog.open(AddUnivCardComponent, dialogConfig);
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
      }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }
  }
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }

}
