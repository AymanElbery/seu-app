import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { TranslationAddCommentComponent } from './../translation-add-comment/translation-add-comment.component';
import { TranslationChangeReqStatusComponent } from './../translation-change-req-status/translation-change-req-status.component';
import { TranslationViewRequestComponent } from '../translation-view-request/translation-view-request.component';

@Component({
  selector: 'app-translation-pendding-requests',
  templateUrl: './translation-pendding-requests.component.html',
  styleUrls: ['./translation-pendding-requests.component.css']
})
export class TranslationPenddingRequestsComponent implements OnInit {

  requestsList = [];
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestsService: ClientAdminRequestsService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.getPenddingRequests();
  }

  getPenddingRequests() {
    this.isLoading = true;
    this.requestsService.getPenddingRequests().subscribe((response) => {
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
        this.getPenddingRequests();
      }
    });
  }

  openChangeStatusDialog(reqId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = reqId;

    let dialogref = this.dialog.open(TranslationChangeReqStatusComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getPenddingRequests();
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
        this.getPenddingRequests();
      }
    });
  }

  exportAsXLSX(){
    this.requestsService.getPenddingRequests(1).subscribe((response => {
      const linkSource = `data:application/pdf;base64,${response['data']}`;
      const downloadLink = document.createElement("a");
      const fileName = "pendding_requests.xls";
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }));
  }

}
