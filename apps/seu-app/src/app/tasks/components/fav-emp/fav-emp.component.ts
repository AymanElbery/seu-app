import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TasksManagementService } from '../../services/tasks-management.service';

@Component({
  selector: 'app-fav-emp',
  templateUrl: './fav-emp.component.html',
  styleUrls: ['./fav-emp.component.css']
})
export class FavEmpComponent implements OnInit, OnDestroy {

  AddReqForm: FormGroup;
  submitted = false;
  subscriptionEMplist: Subscription;
  subscriptionEMpDlete: Subscription;
  ddlemplist: any;
  isLoading = false;
  subscriptions;

  favList = [];
  constructor(private route: ActivatedRoute, private toastr: AppToasterService, private taskservice: TasksManagementService, private fb: FormBuilder, private translate: TranslateService, private router: Router) {
    this.taskservice.reloadList();
    this.AddReqForm = fb.group({
      'favEmpId': ['', [Validators.required]]
    });
  }

  onFormSubmit() {
    if (this.taskservice.empListFavourit.includes(this.AddReqForm.value['favEmpId'])) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("tasks.already_exist") }]);
      return false;
    }
    this.submitted = true;
    this.isLoading = true;

    this.taskservice.AddFavEmp(this.AddReqForm.value).subscribe(response => {
      if (response['data']['addFavouriteEmp'] == true) {
        this.taskservice.empListFavourit.push(this.AddReqForm.value['favEmpId']);
        this.favList = this.taskservice.getfaVouriteList();
        this.AddReqForm.controls['favEmpId'].setValue('');
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('general.request_saved') }]);
      } else {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("general.error") }]);
      }
      this.isLoading = false;
    },
      err => {
        this.toastr.push([{ type: 'error', 'body': this.translate.instant("general.error") }]);
        this.isLoading = false;
      });
  }

  ngOnInit() {
    this.getDDLEmplist();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getDDLEmplist();
    });
  }

  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
    if (this.subscriptionEMplist)
      this.subscriptionEMplist.unsubscribe();
  }

  getDDLEmplist() {
    this.ddlemplist = this.taskservice.empList;
    this.favList = this.taskservice.getfaVouriteList();
    this.subscriptionEMplist = this.taskservice.empListsubject.subscribe(emplist => {      
      this.ddlemplist = this.taskservice.empList;
      this.favList = this.taskservice.getfaVouriteList();
     
    });
  }

  deleting = false;
  delete(favEmpId) {
   
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      this.isLoading = true;
      this.subscriptionEMpDlete = this.taskservice.DeleteFavEmployee(favEmpId).subscribe(empreqsdel => {
        if (empreqsdel['data']['deleteFavouriteEmp'] == true) {          
          this.getDDLEmplist();          
        } else {
          this.toastr.push([{ type: 'error', 'body': this.translate.instant("general.error") }]);
        }        
        this.deleting = false;
        this.isLoading = false;
        
      },
        err => {
          this.toastr.tryagain();
          this.deleting = false;
        });

    }
  }

}
