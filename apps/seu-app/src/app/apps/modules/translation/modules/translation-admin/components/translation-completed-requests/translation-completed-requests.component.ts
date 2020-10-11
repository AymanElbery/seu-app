import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TranslationViewRequestComponent } from '../translation-view-request/translation-view-request.component';
import { TranslationAddCommentComponent } from '../translation-add-comment/translation-add-comment.component';

@Component({
  selector: 'app-translation-completed-requests',
  templateUrl: './translation-completed-requests.component.html',
  styleUrls: ['./translation-completed-requests.component.css']
})
export class TranslationCompletedRequestsComponent implements OnInit {

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
    this.getAllRequests();
  }

  getAllRequests() {
    this.isLoading = true;
    this.requestsService.getCompletedRequests().subscribe((response) => {
      this.requestsList = response['data'];
      this.requestsList = this.requestsService.addFileURL(this.requestsList);
      this.isLoading = false;
    }, err => {
      this.requestsService.tryagain();
      this.isLoading = false;
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
        this.getAllRequests();
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
        this.getAllRequests();
      }
    });
  }

  exportAsXLSX(){
    this.requestsService.getCompletedRequests(1).subscribe((response => {
      const linkSource = `data:application/pdf;base64,${response['data']}`;
      const downloadLink = document.createElement("a");
      const fileName = "completed_requests.xls";
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }));
  }
}