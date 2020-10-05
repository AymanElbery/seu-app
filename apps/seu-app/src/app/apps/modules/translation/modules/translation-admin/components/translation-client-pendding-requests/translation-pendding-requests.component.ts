import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { TranslationAddCommentComponent } from './../translation-add-comment/translation-add-comment.component';
import { TranslationChangeReqStatusComponent } from './../translation-change-req-status/translation-change-req-status.component';

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
    this.getAllRequests();
  }

  getAllRequests() {
    this.isLoading = true;
    this.requestsService.getAllRequests().subscribe((response) => {
      this.requestsList = response['data'];
      this.isLoading = false;
    },err=>{
      this.requestsService.tryagain();
      this.isLoading = false;
    });
  }

  openAddCommentDialog(reqId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = reqId;

    let dialogref = this.dialog.open(TranslationAddCommentComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if(result){
        this.getAllRequests();
      }
    });
  }

  openChangeStatusDialog(reqId){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = reqId;

    let dialogref = this.dialog.open(TranslationChangeReqStatusComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if(result){
        this.getAllRequests();
      }
    });
  }

}
