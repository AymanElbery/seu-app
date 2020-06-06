import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';


@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css']
})
export class VacationRequestComponent implements OnInit {
  AddReqForm: FormGroup;
  submitted = false;
  vacationreqtype: any;
  ddltruefalse = true;
  citydata;
  ddlday = [];
  ddlmonth = [];
  ddlyear = [];
  altEmpItems;
  countryNewItems;
  cityNewItems;
  compErkabItems;
  subscriptionDDLReqtype: Subscription;
  subscriptionvac: Subscription;
  vacationsbal;
  isLoading = true;
  subscriptions;
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute,
              private toastr: AppToasterService,
              private empreqservice: EmployeeRequestsService,
              private fb: FormBuilder,
              private translate: TranslateService,
              private router: Router) {
    this.AddReqForm = fb.group({
      requestType: [this.id],
      vacation: ['', [Validators.required]],
      timePeriod: ['', [Validators.required]],
      beginDay: ['', [Validators.required]],
      beginMonth: ['', [Validators.required]],
      beginYear: ['', [Validators.required]],
      toCountryNew: [''],
      toCityNew: [''],
      vacationLoc: [''],
      compensationVal: [''],
      altEemployee: [''],
      phone: [''],
      notes: ['']

    });


  }
  selectcityFF() {
    this.selectcity(this.AddReqForm.controls.toCountryNew.value);
  }
  selectcity(countryid) {
    if (!countryid) {
      this.citydata = [];
      return false;
    }
    this.subscriptionvac = this.empreqservice.getCities(countryid).subscribe(citydata => {
      if (citydata) {
        this.citydata = (citydata as any).data;
        // console.log("city data",this.citydata);
        this.isLoading = false;
      } else {
        // this.messages = [];
      }
    });
  }

  onFormSubmit(event) {
    // this.isLoading = true;
    const submitdatavalue = (this.AddReqForm.value);
    if (this.AddReqForm.invalid) {
      return;
    }
    this.submitted = true;
    // console.log("submit data", submitdatavalue);
    this.empreqservice.submitreqservice(submitdatavalue).subscribe(contacts => {
      //// console.log("saved ", contacts);
      if (!(contacts.data as any).saveRequest) {
        let error = (contacts as any).data['errorMassege'];
        // this.toastr.push((contacts as any).data);
        this.toastr.push([{ type: 'error', body: error }]);
        // this.isLoading = false;
        this.submitted = false;
      } else {
        this.toastr.push([{ type: 'success', body: this.translate.instant('wafi.request_saved') }]);
        // this.isLoading = false;
        // navigate
        this.submitted = false;
        this.router.navigate(['/wafi/employee-requests']);
      }
    }

    );

    // this.formSubmitted = true;
    if (this.AddReqForm.invalid) {
      return;
    }
  }
  getvacationbal(event) {
    // console.log("vac type", event);

    this.subscriptionvac = this.empreqservice.getVacationbalance(event, 'sysdate').subscribe(empvacation => {
      if (empvacation) {
        this.vacationsbal = (empvacation as any).data['VacationBalance'];
        //// console.log("emp vacations",this.vacationsbal);
        this.isLoading = false;
      } else {
        // this.messages = [];
      }
    });
  }

  ngOnInit() {
    // this.uifSelected = this.ddlday.filter(o => o.value == this.uifSelectedValue)[0];
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      if (this.id == 6) {
        this.ddltruefalse = false;
        this.vacationsbal = this.getvacationbal(1);
        this.AddReqForm.controls.vacation.setValue(1);
        // var=this.FillDDLReqType(this.id);
      }
      this.FillDDLReqType(this.id);
    });
    // this.FillDDLReqType();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.FillDDLReqType(this.id);
    });

  }
  get f() { return this.AddReqForm.controls; }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  FillDDLReqType(reqtypeid: any) {
    this.isLoading = true;
    this.AddReqForm.controls.requestType.setValue(this.id);

    this.subscriptionDDLReqtype = this.empreqservice.getDDLVacationType(reqtypeid).subscribe(reqtype => {
      if (reqtype) {
        // console.log(reqtype);
        this.vacationreqtype = reqtype;
        this.vacationreqtype = (reqtype as any).data['vacationItems'];
        this.ddlday = (reqtype as any).data['dayItem'];
        this.ddlmonth = (reqtype as any).data['monthItem'];
        this.ddlyear = (reqtype as any).data['yearItem'];
        this.altEmpItems = (reqtype as any).data['altEmpItems'];
        this.countryNewItems = (reqtype as any).data['countryNewItems'];
        this.cityNewItems = (reqtype as any).data['cityNewItems'];
        this.compErkabItems = (reqtype as any).data['compErkabItems'];

        // console.log("vac item data", this.ddlday);
        this.isLoading = false;
      } else {
      }
    });
  }

  back() {
    this.router.navigate(['/wafi/employee-requests/add-new-request']);
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
