import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { TranslationCompleteFormComponent } from '../translation-complete-form/translation-complete-form.component';
import { TranslationViewRequestComponent } from '../translation-view-request/translation-view-request.component';
import { TranslationAddCommentComponent } from '../translation-add-comment/translation-add-comment.component';

@Component({
  selector: 'app-translation-myrequests',
  templateUrl: './translation-myrequests.component.html',
  styleUrls: ['./translation-myrequests.component.css']
})
export class TranslationMyrequestsComponent implements OnInit {

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
    this.requestsService.getMyRequests().subscribe((response) => {
      this.requestsList = response['data'];
      this.requestsList = this.requestsService.addFileURL(this.requestsList);
      this.isLoading = false;
    }, err => {
      this.requestsService.tryagain();
      this.isLoading = false;
    });
  }

  openDialog(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = { 'req': req };
    let dialogref = this.dialog.open(TranslationCompleteFormComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.getAllRequests();
      }
    });
  }
  openDetailsDialog(req){
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
}
