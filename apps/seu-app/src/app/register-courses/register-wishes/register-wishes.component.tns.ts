import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegisterWishesService } from '../services/register-wishes.service';
import { RegisterWishes } from '../../shared/models/register-wishes';
import { NgForm } from '@angular/forms';
import { AppToasterService } from '../../shared/services/app-toaster';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as utils from 'tns-core-modules/utils/utils';
import * as app from 'tns-core-modules/application';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { ThrowStmt } from '@angular/compiler';
import { Wishes } from 'src/app/shared/models/wishes';


@Component({
  selector: 'app-register-wishes',
  templateUrl: './register-wishes.component.tns.html',
  styleUrls: ['./register-wishes.component.tns.scss']
})
export class RegisterWishesComponent implements OnInit {

  standings: any[] = [{
    p1: 'P',
    team: 'Team',
    z: 'Z',
    v: 'V',
    r: 'R',
    p2: 'P',
    s: 'S',
    b: 'B'
  }];
  wSelectedIndex;
  constructor(private toastr: AppToasterService, private acadmicProc: RegisterWishesService) {

    this.registerWishes = { tow_days: 0, wish: '' };
    //  this.registerWishes.tow_days=false;
    this.reqData = {colledge: '', major: '', requests: [], student_name: '', wishes_list: []};
  }
  registerWishes: RegisterWishes;
  reqData: Wishes;
  msgs;
  status;
  itemSource;
  isLoading = false;

  deleting = false;

  requesting = false;
  data: Observable<{ toggle: boolean }>;
  ngOnInit() {

    const sideDrawer = app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    // tslint:disable-next-line: deprecation
    this.data = of({ toggle: false }).pipe(delay(500));
    this.itemSource = new ValueList<any>();
    this.getServiceRequest();





  }
  onDrawerButtonTap(): void {
    const sideDrawer = app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
  getServiceRequest() {
    this.isLoading = true;
    console.log('load data');
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        console.log('wishes');
        console.log(this.reqData.wishes_list);
        this.itemSource = new ValueList();
        this.reqData.wishes_list.forEach(element => {
          this.itemSource.push({ value: element.id, display: element.value });
        });
        this.registerWishes = { tow_days: 0, wish: '' };

        console.log('msgs');
        console.log(this.msgs);
        this.isLoading = false;
      }
    );
  }



  delete(id, index) {

    if (confirm('هل انت متأكد')) {
      this.deleting = true;
      this.isLoading = true;
      this.acadmicProc.deleteReq(id).then(res => {
        const messages = (res as any).messages;
        this.status = (res as any).status;
        this.toastr.push(messages);
        // tslint:disable-next-line: triple-equals
        if (this.status == 1) {
          this.acadmicProc.reqData.requests.splice(index, 1);
        }
        this.deleting = false;
        this.isLoading = false;
      });
    }

  }



  onSubmit(form: NgForm) {
    this.addRequest(this.registerWishes);
  }
  selItem(e: SelectedIndexChangedEventData) {
    console.log('index' + e.newIndex);
    const x = this.itemSource.getValue(e.newIndex);
    console.log(x);
    this.registerWishes.wish = x as string;
    console.log('wish data' + x);

    console.log(this.registerWishes);

  }
  onChange(e) {
    this.registerWishes = { tow_days: 0, wish: '' };

    if (e) {
      this.registerWishes.tow_days = 1;
    } else {
      this.registerWishes.tow_days = 0;
    }


  }
  addRequest(data: any) {
    this.isLoading = true;
    this.registerWishes = this.itemSource.getValue(this.wSelectedIndex);
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      this.requesting = false;
      if ((res as any).status) {
        this.getServiceRequest();
        this.registerWishes = { tow_days: 0, wish: '' };
      }
      this.isLoading = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
        this.isLoading = false;
        this.registerWishes = { tow_days: 0, wish: '' };

      });
  }

}
