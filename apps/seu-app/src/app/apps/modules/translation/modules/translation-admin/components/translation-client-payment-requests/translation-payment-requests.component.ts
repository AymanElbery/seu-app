import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { TranslationAddCommentComponent } from '../translation-add-comment/translation-add-comment.component';
import { TranslationChangeReqStatusComponent } from '../translation-change-req-status/translation-change-req-status.component';
import { TranslationViewRequestComponent } from '../translation-view-request/translation-view-request.component';

@Component({
  selector: 'app-translation-payment-requests',
  templateUrl: './translation-payment-requests.component.html',
  styleUrls: ['./translation-payment-requests.component.css']
})
export class TranslationPaymentRequestsComponent implements OnInit {

  requestsList = [];
  isLoading = false;
  payment_action = 'payment';
  filter_text;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestsService: ClientAdminRequestsService,
    public dialog: MatDialog
  ) {
    this.payment_action = this.route.snapshot.routeConfig.path.replace("-requests", "")
  }

  ngOnInit() {
    this.listRequests();
  }

  listRequests() {
    this.isLoading = true;
    this.requestsService.getPaymentRequests(this.payment_action).subscribe((response) => {
      this.requestsList = response['data'];
      this.requestsList = this.requestsService.addFileURL(this.requestsList);
      this.isLoading = false;
    }, err => {
      this.requestsService.tryagain();
      this.isLoading = false;
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
        this.listRequests();
      }
    });
  }

  openChangeStatusDialog(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = req;

    let dialogref = this.dialog.open(TranslationChangeReqStatusComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.listRequests();
      }
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
        this.listRequests();
      }
    });
  }

  exportAsXLSX() {
    this.requestsService.getPaymentRequests(this.payment_action, 1).subscribe((response => {
      const linkSource = `data:application/octet-stream;base64,${response['data']}`;
      const downloadLink = document.createElement("a");
      const fileName = "payment_requests.xls";
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }));
  }

}
