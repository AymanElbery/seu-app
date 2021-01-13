import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientMyrequestsService } from '../../../../services/translation-client-myrequests';
import { TranslationUserService } from '../../../../services/translation-user';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { TranslationAddCommentComponent } from './../../../translation-admin/components/translation-add-comment/translation-add-comment.component';
import { TranslationViewRequestComponent } from '../../../translation-admin/components/translation-view-request/translation-view-request.component';
import { TranslationPayFeeComponent } from '../translation-pay-fee/translation-pay-fee.component';

@Component({
  selector: 'app-translation-client-myrequests',
  templateUrl: './translation-client-myrequests.component.html',
  styleUrls: ['./translation-client-myrequests.component.css']
})
export class TranslationClientMyrequestsComponent implements OnInit {

  requestsList = [];
  isLoading = false;
  userId;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: TranslationUserService,
    private myrequestsService: ClientMyrequestsService,
    public dialog: MatDialog
  ) {
    this.userId = this.userService.user.USER_ID;
  }

  ngOnInit() {
    this.getMyRequests();
  }

  getMyRequests() {
    this.isLoading = true;
    this.myrequestsService.getMyRequests(this.userId).subscribe((response) => {
      this.requestsList = response['data'];
      this.requestsList = this.myrequestsService.addFileURL(this.requestsList);
      this.isLoading = false;
    }, err => {
      this.myrequestsService.tryagain();
      this.isLoading = false;
    });
  }
  cancel(req_id) {
    this.myrequestsService.cancel(req_id).subscribe((response) => {
      this.getMyRequests();
    }, err => {
      this.myrequestsService.tryagain();
    });
  }
  openDetailsDialog(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = { 'req': req };
    let dialogref = this.dialog.open(TranslationViewRequestComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getMyRequests();
      }
    });
  }
  openAddPayment(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    req['casllbackURL'] = '/apps/translation/pay-callback/'
    dialogConfig.data = req;

    let dialogref = this.dialog.open(TranslationPayFeeComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getMyRequests();
      }
    });
  }
  openAddCommentDialog(reqId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = reqId;

    let dialogref = this.dialog.open(TranslationAddCommentComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getMyRequests();
      }
    });
  }

}
