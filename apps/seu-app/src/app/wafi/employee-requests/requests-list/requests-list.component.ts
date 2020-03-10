import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';  
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {RequestsDetailsComponent} from '../requests-details/requests-details.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit,OnDestroy {
  subscription: Subscription;
  subscriptiondelreq: Subscription;
  emplistrequest:any;
  constructor(private http: HttpClient,private empreqservice:EmployeeRequestsService,private toastr: AppToasterService,private translate: TranslateService,private dialog: MatDialog) { 
    }
  isLoading = true;
  subscriptions;

  ngOnInit() {
    this.getReqlist();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getReqlist();
    });
    
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }

  getReqlist(){
   
      this.isLoading = true
      this.subscription = this.empreqservice.getEmpReqLists().subscribe(empreqs => {
       if (empreqs) {       
         this.emplistrequest = (empreqs as any).data["serviceRequestTable"];;
         console.log("emp request",this.emplistrequest);      
         this.isLoading = false;      
       } else {       
       
       }
     });
    
    }

    getreqdetail(orderItemIndex,requestSeq, requestType) {

         const dialogConfig = new MatDialogConfig();
         dialogConfig.autoFocus = true;
         dialogConfig.disableClose = false;
         dialogConfig.width = "75%";
         
        dialogConfig.data = {   requestSeq,requestType };
         this.dialog.open(RequestsDetailsComponent, dialogConfig).afterClosed().subscribe(res => {         
         });
       }

       deleting = false;
  delete(requestSeq:any, requestType:any) {
    console.log(requestSeq,requestType);
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      this.subscriptiondelreq = this.empreqservice.deletetEmpRequest(requestSeq, requestType).subscribe(empreqsdel => {
        if (empreqsdel) {  
          console.log(empreqsdel);
          //this.toastr.push((empreqsdel as any).statusDesc);     
          this.deleting = false;
          this.getReqlist();
          
        } else {       
        
        }
      },
       err => {
        this.toastr.tryagain();
        this.deleting = false;
      });
      
    }
  }

}
