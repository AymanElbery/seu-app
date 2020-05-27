import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { AppToasterService } from '../../../shared/services/app-toaster.tns';
import { ValueItem, ValueList } from 'nativescript-drop-down';
import { trigger } from '@angular/animations';
import { RouterExtensions } from 'nativescript-angular/router';


@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css']
})
export class VacationRequestComponent implements OnInit {
  submitted = false;
  vacationreqtype: any;
  ddltruefalse = true;
  citydata;
  ddlday = [];
  days: ValueItem<number>[] = [];
  daysDropDown;
  ddlmonth = [];
  monthes: ValueItem<number>[] = [];
  monthesDropDown;
  ddlyear = [];
 //s years;
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
  msg;
  dataObject = {vacation: 0, beginYear: 0, beginMonth: 0,
     beginDay: 0, timePeriod: 0, compensationVal: 0,
     altEemployee: 0, toCountryNew: 0, toCityNew: 0,
     vacationLoc: '', phone: '', notes: ''};
  vacsDropDown;
  vacs: ValueItem<number>[] = [];
  altempDropDown;
  altemps: ValueItem<number>[] = [];
  yearsDropDown;
  years: ValueItem<number>[] = [];

  countryDropDown;
  country: ValueItem<number>[] = [];

  cityDropDown;
  city: ValueItem<number>[] = [];
  private sub: any;
  compErkabs: ValueItem<number>[] = [];
  compErkabItemsDropDown;
  constructor(private route: ActivatedRoute,
              private toastr: AppToasterService,
              private empreqservice: EmployeeRequestsService,
              private translate: TranslateService,
              private router: Router,
              private routerExtensions: RouterExtensions,
              ) {


  }

  changeVac(e) {
    this.dataObject.vacation = this.vacsDropDown.getValue(e.newIndex);
    console.log('vacid');
    console.log(this.dataObject.vacation);
    this.getvacationbal(this.dataObject.vacation);
  }
  changeYear(e) {
    this.dataObject.beginYear = this.yearsDropDown.getValue(e.newIndex);
  }
  changeMonth(e) {
    this.dataObject.beginMonth = this.monthesDropDown.getValue(e.newIndex);
  }
  changeDay(e) {
    this.dataObject.beginDay = this.daysDropDown.getValue(e.newIndex);
  }

  changecomp(e) {
    this.dataObject.compensationVal = this.compErkabItemsDropDown.getValue(e.newIndex);
  }
  changealtemp(e) {
    this.dataObject.altEemployee = this.altempDropDown.getValue(e.newIndex);
  }

  changecountry(e) {
    this.dataObject.toCountryNew = this.countryDropDown.getValue(e.newIndex);
    console.log(this.dataObject.toCountryNew );
    this.selectcity(this.dataObject.toCountryNew);

  }
  changecity(e) {
    this.dataObject.toCityNew = this.cityDropDown.getValue(e.newIndex);
  }
  selectcityFF(val) {
    this.selectcity(val);
  }
  selectcity(countryid) {
    if (!countryid) {
      this.citydata = [];
      return false;
    }
    this.subscriptionvac = this.empreqservice.getCities(countryid).subscribe(citydata => {
      if (citydata) {

        this.citydata = (citydata as any).data;
        console.log(this.citydata);
        console.log('ciy');
        this.city = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.citydata.length; i++) {
          this.city.push(
            {
              value: this.citydata[i].value,
              display: this.citydata[i].label
            }
          );
        }

        this.cityDropDown = new ValueList(this.city);
        console.log(this.cityDropDown);
        // console.log("city data",this.citydata);
        this.isLoading = false;
      } else {
        // this.messages = [];
      }
    });
  }

  onFormSubmit(f) {
    // this.isLoading = true;
    const submitdatavalue = this.dataObject;

    this.submitted = true;
    // console.log("submit data", submitdatavalue);
    this.empreqservice.submitreqservice(submitdatavalue).subscribe(contacts => {
       console.log('saved ', contacts);
       if ((contacts as any).data.saveRequest) {
        this.toastr.saved();
        this.back();
       } else {
       this.msg = (contacts as any).data.errorMassege;
       this.toastr.show(this.msg);
       }

    }

    );

    // this.formSubmitted = true;

  }
  getvacationbal(vacType) {
     console.log('vac type', vacType);
     this.subscriptionvac = this.empreqservice.getVacationbalance(vacType, 'sysdate').subscribe(empvacation => {
      if (empvacation) {
        this.vacationsbal = (empvacation as any).data.VacationBalance;
        console.log('emp vacations', this.vacationsbal);
      } else {
        // this.messages = [];
      }
    });
  }

  ngOnInit() {
    // this.uifSelected = this.ddlday.filter(o => o.value == this.uifSelectedValue)[0];
    console.log('start');
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      console.log('id');
      console.log(this.id);
      if (this.id == 6) {
        this.ddltruefalse = false;
        this.vacationsbal = this.getvacationbal(1);
        this.dataObject.vacation = 1;
       // this.AddReqForm.controls.vacation.setValue(1);
        // var=this.FillDDLReqType(this.id);
     
      }
      this.FillDDLReqType(this.id);
    });
    // this.FillDDLReqType();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.FillDDLReqType(this.id);
    });

  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  FillDDLReqType(reqtypeid: any) {
    this.isLoading = true;
   // this.AddReqForm.controls.requestType.setValue(this.id);

    this.subscriptionDDLReqtype = this.empreqservice.getDDLVacationType(reqtypeid).subscribe(reqtype => {
      console.log(reqtype);

      if (reqtype) {
        // console.log(reqtype);
        this.vacationreqtype =  (reqtype as any).data.vacationItems;

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.vacationreqtype.length; i++) {
          this.vacs.push(
            {
              value: this.vacationreqtype[i].value,
              display: this.vacationreqtype[i].label
            }
          );
        }
        console.log('vacs');
        console.log(this.vacs);
        this.vacsDropDown = new ValueList(this.vacs);
        this.vacationreqtype = (reqtype as any).data.vacationItems;
        this.ddlday = (reqtype as any).data.dayItem;


        for (let i = 0; i < this.ddlday.length; i++) {
          this.days.push(
            {
              value: this.ddlday[i].value,
              display: this.ddlday[i].label
            }
          );
        }
        this.daysDropDown = new ValueList(this.days);

        this.ddlmonth = (reqtype as any).data.monthItem;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.ddlmonth.length; i++) {
          this.monthes.push(
            {
              value: this.ddlmonth[i].value,
              display: this.ddlmonth[i].label
            }
          );
        }
        this.monthesDropDown = new ValueList(this.monthes);
        this.ddlyear = (reqtype as any).data.yearItem;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.ddlyear.length; i++) {
          this.years.push(
            {
              value: this.ddlyear[i].value,
              display: this.ddlyear[i].label
            }
          );
        }
        this.yearsDropDown = new ValueList(this.years);

        this.altEmpItems = (reqtype as any).data.altEmpItems;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.altEmpItems.length; i++) {
          this.altemps.push(
            {
              value: this.altEmpItems[i].value,
              display: this.altEmpItems[i].label
            }
          );
        }
        this.altempDropDown = new ValueList(this.altemps);

        this.countryNewItems = (reqtype as any).data.countryNewItems;

        for (let i = 0; i < this.countryNewItems.length; i++) {
          this.country.push(
            {
              value: this.countryNewItems[i].value,
              display: this.countryNewItems[i].label
            }
          );
        }
        this.countryDropDown = new ValueList(this.country);


        this.cityNewItems = (reqtype as any).data.cityNewItems;

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.cityNewItems.length; i++) {
          this.city.push(
            {
              value: this.cityNewItems[i].value,
              display: this.cityNewItems[i].label
            }
          );
        }
        this.cityDropDown = new ValueList(this.city);


        this.compErkabItems = (reqtype as any).data.compErkabItems;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.compErkabItems.length; i++) {
          this.compErkabs.push(
            {
              value: this.compErkabItems[i].value,
              display: this.compErkabItems[i].label
            }
          );
        }
        this.compErkabItemsDropDown = new ValueList(this.compErkabs);

        // console.log("vac item data", this.ddlday);
        this.isLoading = false;
      } else {
      }
    });
  }

  back() {
    this.router.navigate(['requests/add-request']);
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}
}
