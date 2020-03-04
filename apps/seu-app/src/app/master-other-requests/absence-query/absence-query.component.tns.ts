import { Component, OnInit } from '@angular/core';
import { AbseneQueryService } from '../services/absene-query.service';
import { TranslateService } from '@ngx-translate/core';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import { AppToasterService } from '../../shared/services/app-toaster';

@Component({
  selector: 'app-absence-query',
  templateUrl: './absence-query.component.html',
  styleUrls: ['./absence-query.component.scss']
})
export class AbsenceQueryComponent implements OnInit {
  isLoading: boolean = false;
  reqData;
  msgs;
  constructor(private translate: TranslateService, private toastr: AppToasterService,
    private otherReq: AbseneQueryService) {
   }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;
    this.getRequests();
    this.subscribeLangChange();
  }
  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }

  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
}

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getRequests();
    });
  }

  getRequests() {

    this.isLoading = true;

    this.otherReq.getRequests().then(
      res => {
        this.otherReq.reqData = (res as any).data;
        this.otherReq.msgs = (res as any).messages;
        this.reqData = this.otherReq.reqData;
        this.msgs = this.otherReq.msgs;
        this.isLoading = false;
        console.log(this.reqData);
      }, err => {
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }


}
