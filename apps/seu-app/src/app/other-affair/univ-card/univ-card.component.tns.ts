import { Component, OnInit } from '@angular/core';
import { universityCard } from '../../shared/models/university-card';
import { UvnivCardService } from '../services/univ-card.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import { RouterExtensions } from 'nativescript-angular/router';
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-univ-card',
  templateUrl: './univ-card.component.tns.html',
  styleUrls: ['./univ-card.component.tns.scss']
})
export class UnivCardComponent implements OnInit {

  card: universityCard;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(
    private translate: TranslateService,
    private toastr: AppToasterService, private univCard: UvnivCardService,
    private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right; 
    this.card = { name: '', phone: '', ssn: '', day: '', time: '', level: '', photo: '', ssn_file: '' };
    this.getRequests();
  }

  getRequests() {
    this.isLoading = true;
    this.univCard.getِgetRequests().then(
      res => {
        this.univCard.reqData = (res as any).data;
        this.univCard.msgs = (res as any).messages;
        this.reqData = this.univCard.reqData;
        this.msgs = this.univCard.msgs;
        var key = this.reqData;
        this.isLoading = false;
        //console.log(this.reqData);
      }
    );
  }

  deleting = false;
  delete(id, index) {
    dialogs.confirm({
        title: this.translate.instant('general.delete_confirm'),
        message: "",
        okButtonText: "OK",
        cancelButtonText: 'Cancel'
    }).then((result:boolean) => {
      if (result) {
      this.deleting = true;
      this.univCard.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.reqData.requests.splice(index, 1);
        }
        this.deleting = false;
      }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }});
  }
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }

  onTap(){
    this.routerExtensions.navigate(['/other/adduniversitycard'], {
      transition: {
          name: 'fade'
      }
  });
  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }


}
