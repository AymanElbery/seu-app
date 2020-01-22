import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FeesExceptionService } from '../services/fees-exception.service';
import { AddFeesExceptionComponent } from './diag/add-fees-exception/add-fees-exception.component';
import { AppToasterService } from '../../shared/services/app-toaster';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { BaseData } from 'src/app/shared/models/base-data';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fees-exception',
  templateUrl: './fees-exception.component.html',
  styleUrls: ['./fees-exception.component.scss']
})
export class FeesExceptionComponent implements OnInit {

  constructor(    private router: Router,    private toastr: AppToasterService, private acadmicProc: FeesExceptionService) { }
  reqData: BaseData;
  msgs;
  status;
  isLoading = false;

  deleting = false;

  ngOnInit() {
    this.reqData = {requests: []};
    this.getRequests();
    const sideDrawer = app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;


  }
  onDrawerButtonTap(): void {
    const sideDrawer = app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
  getRequests() {
    this.isLoading = true;
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
      }
    );
  }
  delete(id, index) {
    if (confirm('هل انت متأكد')) {
      this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        // tslint:disable-next-line: triple-equals
        if ((res as any).status == 1) {
          this.reqData.requests.splice(index, 1);
        }
        this.deleting = false;
      }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }

  }
add() {
  this.router.navigate(['/finance/addfe']);


}


}
