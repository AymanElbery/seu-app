import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';  
import { Employee } from '../personalinfo/employee';  
import { TranslateService } from '@ngx-translate/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { UpdateinfoComponent } from './updateinfo/updateinfo.component.tns';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.tns.html',
  styleUrls: ['./personalinfo.component.tns.css']
})
export class PersonalinfoComponent implements OnInit,OnDestroy {
  //allEmployee: Observable<Employee[]>; 
 
  empInfo;
  empInfolang;
  messages: any[] = [];
  subscription: Subscription;
  subscriptionLang: Subscription;
  constructor(private http: HttpClient,private empservice:EmployeesService,private translate: TranslateService,
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,) { }
  isLoading = true;
  subscriptions;
  ngOnInit() {
    this.loadEmpdata();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.loadEmpdata();
    });
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
  loadEmpdata() {  
    // subscribe to home component messages
    // this.isLoading = true;
    // this.empservice.getِEmpInfo().then(
    //   res => {
    //     this.empInfo = (res as any).data;
    //     //console.log("emp info",this.empInfo)
    //     this.isLoading = false;
    //   }
    // );
    this.isLoading = true
    this.subscription = this.empservice.getdataEmployees().subscribe(empdata => {
     if (empdata) {       
       this.empInfo = (empdata as any).data;       
       this.subscriptionLang = this.empservice.getdataEmployeesLang().subscribe(empdaemplang => {
        if (empdaemplang) {
          this.empInfolang = (empdaemplang as any).data;
          this.empInfo[17]["data"]=(this.empInfo[17]["data"]==2?this.empInfolang[1]["label"]:this.empInfolang[0]["label"]);          
        }
       });
       //this.messages.push(empdata[0]);
       this.isLoading = false;      
     } else {       
       this.messages = [];
     }
   });
}

/*openDialog() {
  let updateinfo = this.empInfo;
  updateinfo.langList = this.empInfolang;
 // this.updatedata.email=this.empInfo.data;
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = false;
  dialogConfig.width = "50%";
  dialogConfig.data = { updateinfo };
  this.dialog.open(UpdateinfoComponent, dialogConfig).afterClosed().subscribe(res => {
    this.loadEmpdata();
  });
}*/

onTap(): void {
  let updateinfo = this.empInfo;
  updateinfo.langList = this.empInfolang;

  const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      context: {updateinfo},
      fullscreen: false,
  };

  this._modalService.showModal(UpdateinfoComponent, options)
      .then( result => {
        this.loadEmpdata();

      }
  );
  
}


}
