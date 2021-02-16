import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { TranslationUserService } from '../../../../services/translation-user';
import { TranslationAddCommentComponent } from '../translation-add-comment/translation-add-comment.component';
import { TranslationAddTranslatedFileComponent } from '../translation-add-translated-file/translation-add-translated-file.component';
import { TranslationCompleteFormComponent } from '../translation-complete-form/translation-complete-form.component';
import { TranslationReviewFormComponent } from '../translation-review-form/translation-review-form.component';
import { TranslationAssignReviewFormComponent } from '../translation-assign-review-form/translation-assign-review-form.component';
import { TranslationViewRequestComponent } from '../translation-view-request/translation-view-request.component';

@Component({
  selector: 'app-translation-reviewing-requests',
  templateUrl: './translation-client-reviewing-requests.component.html',
  styleUrls: ['./translation-client-reviewing-requests.component.css']
})
export class TranslationReviewingRequestsComponent implements OnInit {

  requestsList = [];
  isLoading = false;
  user;
  filter_text;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestsService: ClientAdminRequestsService,
    private userService: TranslationUserService,
    public dialog: MatDialog
  ) {
    this.user = this.userService.user;
  }

  ngOnInit() {
    if (this.user['ROLE'] == 'emp') {
      this.getReviewingRequests(true);
    } else {
      this.getReviewingRequests();
    }
  }

  getReviewingRequests(admin = false) {
    this.isLoading = true;
    if (!admin) {
      this.requestsService.getReviewingRequests().subscribe((response: any) => {
        this.requestsList = response['data'];
        this.requestsList = this.requestsService.addFileURL(this.requestsList);
        this.isLoading = false;
      }, err => {
        this.requestsService.tryagain();
        this.isLoading = false;
      });
    } else {
      this.requestsService.getReviewingEmpRequests(this.userService.user['USER_ID']).subscribe((response: any) => {
        this.requestsList = response['data'];
        this.requestsList = this.requestsService.addFileURL(this.requestsList);
        this.isLoading = false;
      }, err => {
        this.requestsService.tryagain();
        this.isLoading = false;
      });
    }
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
    dialogConfig.data = { 'req': req , 'review' : true };

    let dialogref = this.dialog.open(TranslationCompleteFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getReviewingRequests();
      }
    });
  }

  openAssignDialog(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.data = { 'req': req };

    let dialogref = this.dialog.open(TranslationAssignReviewFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getReviewingRequests();
      }
    });
  }

  exportAsXLSX(){
    this.requestsService.getReviewingRequests(1).subscribe((response => {
      const linkSource = `data:application/octet-stream;base64,${response['data']}`;
      const downloadLink = document.createElement("a");
      const fileName = "processing_requests.xls";
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }));
  }

}
