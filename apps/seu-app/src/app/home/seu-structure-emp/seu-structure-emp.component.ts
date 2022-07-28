import { Component, OnInit, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { UserService } from '../../account/services/user.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seu-structure-emp',
  styleUrls: ['./seu-structure-emp.component.css'],
  templateUrl: './seu-structure-emp.component.html'
})
export class SeuStructureEmpComponent implements OnInit, OnDestroy {
    form: FormGroup;  
    isLoading = false;
    emp_id;
    all_levels = [];
    levels_a = [];
    levels_b = [];
    levels_c = [];
    saving = false;
    show_form = false;
    show_level_b = false;
    show_level_c = false;
    allowSelection = false;

    constructor(
        public userService: UserService, 
        public translate: TranslateService,
        private fb: FormBuilder,
        private toastr: AppToasterService,
        public dialogRef: MatDialogRef<SeuStructureEmpComponent>, 
        @Inject(MAT_DIALOG_DATA) public data
    ) {
        this.getLookups();
        this.emp_id = data.id;
        this.form = this.fb.group({
          'MANAGER_EMAIL'    : ['', [Validators.required, Validators.email]],
          'LEVEL_A'    : ['', [Validators.required]],
          'NOTES'    : ['']
        });
        
    }

    ngOnInit() {
        document.getElementById("side-menu").style.display = "none";
    }

    ngOnDestroy() {
        document.getElementById("side-menu").style.display = "block";
    }

    onScroll(e) {
        //scrollTop + clientHeight = scrollHeight
        if (parseInt(e.srcElement.scrollTop + e.srcElement.clientHeight) >= (e.srcElement.scrollHeight - 50)) {
          this.allowSelection = true;
        }
    }

    change_level_a(e){
      this.levels_b = [];
      this.show_level_b = false;
      var arr_b = [];
      
      for (let item of this.all_levels) {
        if(item.LEVEL_A == e.LEVEL_A && !arr_b.includes(item.LEVEL_B)){
          arr_b.push(item.LEVEL_B);
        }
      }
      if(arr_b.length > 0 && arr_b[0] != null){
        this.form.addControl('LEVEL_B', new FormControl('', [Validators.required]));
        for (let item of arr_b) {
          if(item != null){
            this.levels_b.push({'LEVEL_B' : item});
          }
        }
        this.show_level_b = true;
      }
    }

    change_level_b(e){
      this.levels_c = [];
      this.show_level_c = false;
      var arr_c = [];
      
      for (let item of this.all_levels) {
        if(item.LEVEL_B == e.LEVEL_B && !arr_c.includes(item.LEVEL_C)){
          arr_c.push(item.LEVEL_C);
        }
      }
      if(arr_c.length > 0 && arr_c[0] != null){
        this.form.addControl('LEVEL_C', new FormControl('', [Validators.required]));
        for (let item of arr_c) {
          if(item != null){
            this.levels_c.push({'LEVEL_C' : item});
          }
        }
        this.show_level_c = true;
      }else{
        this.form.removeControl("LEVEL_C");
      }
    }

    prepare_level_a(){
      let arr = [];
      for (let item of this.all_levels) {
        if(!arr.includes(item.LEVEL_A)){
          arr.push(item.LEVEL_A);
        }
      }
      for (let item of arr) {
        this.levels_a.push({'LEVEL_A' : item});
      }
      this.show_form = true;
    }

    getLookups(){
      this.isLoading = true;
      this.userService.get_seu_structure() 
      .subscribe(
        (response: any) => {
          if (response.status) {
            this.all_levels = response.data.levels;
            this.prepare_level_a();
          }
          this.isLoading = false;
        },
        error => {
        }
      )
    }

    submit(){
      let data = this.form.value;
      data.EMP_ID = this.emp_id;
      this.saving = true;
      this.userService.updateEmpSeuStructureData(data).subscribe(
        (response: any) => {
          if (response) {
            if (response['status']) {
              this.userService.userData['SEU_STRUCTURE_EMP'] = 1;
              this.dialogRef.close();
              this.toastr.push([{ type: 'success', 'body': response['message'] }]);
            } else {
              this.saving = false;
              this.toastr.tryagain();
            }
          }
        },
        error => {
          this.toastr.tryagain();
          this.saving = false;
        }
      );
    }
}