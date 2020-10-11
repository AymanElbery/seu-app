import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { TranslationAddCommentComponent } from '../translation-add-comment/translation-add-comment.component';
import { TranslationReviewFormComponent } from '../translation-review-form/translation-review-form.component';
import { TranslationViewRequestComponent } from '../translation-view-request/translation-view-request.component';

@Component({
  selector: 'app-translation-reviewing-requests',
  templateUrl: './translation-client-reviewing-requests.component.html',
  styleUrls: ['./translation-client-reviewing-requests.component.css']
})
export class TranslationReviewingRequestsComponent implements OnInit {

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
    this.getReviewingRequests();
  }

  getReviewingRequests() {
    this.isLoading = true;
    this.requestsService.getReviewingRequests().subscribe((response) => {
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
        this.getReviewingRequests();
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
        this.getReviewingRequests();
      }
    });
  }

  openDialog(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.data = { 'req': req };
    let dialogref = this.dialog.open(TranslationReviewFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getReviewingRequests();
      }
    });
  }

  exportAsXLSX(){
    this.requestsService.getReviewingRequests(1).subscribe((response => {
      const linkSource = `data:application/pdf;base64,${response['data']}`;
      const downloadLink = document.createElement("a");
      const fileName = "processing_requests.xls";
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }));
  }

}
