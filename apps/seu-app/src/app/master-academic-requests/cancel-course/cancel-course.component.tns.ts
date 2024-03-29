import { Component, OnInit } from '@angular/core';
import { CancelCousre } from '../../shared/models/cancel-cousre';
import { CancelCourseService } from '../services/cancel-course.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { TranslateService } from '@ngx-translate/core';
import { RequestData } from '../../shared/models/request-data';
declare var UIView, NSMutableArray, NSIndexPath;
import { ListViewEventData } from 'nativescript-ui-listview';
import { isIOS, isAndroid } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-cancel-course',
  templateUrl: './cancel-course.component.tns.html',
  styleUrls: ['./cancel-course.component.tns.scss']
})
export class CancelCourseComponent implements OnInit {


  printAR;
  cancelCousre: CancelCousre;
  reqData:RequestData={can_add_new_request:false,notes:[],requests:[],reqs:[]};
  msgs=[];
  status;
  isLoading = false;
  clicked: any;

  constructor(private toastr: AppToasterService, private acadmicProc: CancelCourseService,
    private routerExtensions: RouterExtensions,private translate: TranslateService) { }

    clickme(item) {
      this.clicked = item;
    }
    uclickme(item) {
      this.clicked = {};
    }
    
  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right; 
    this.isLoading = true;
    this.cancelCousre = { courses: null, agreement: 1 };
    this.getRequests();
  }


  getRequests() {
    this.isLoading = true;
    this.acadmicProc.getRequest().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
        console.log(this.msgs);
      }, err => {
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }

  print(req) {
    utils.openUrl(this.acadmicProc.Download(req));
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
      this.acadmicProc.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.reqData.reqs.splice(index, 1);
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
    this.routerExtensions.navigate(['/academicrequests/addcancelcourse'], {
      transition: {
          name: 'fade'
      }
  });
  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
  
  onItemTap(event: ListViewEventData) {
    const listView = event.object,
        rowIndex = event.index,
        dataItem = event.view.bindingContext;

    dataItem.expanded = !dataItem.expanded;
    if (isIOS) {
      // Uncomment the lines below to avoid default animation
      UIView.animateWithDurationAnimations(0, () => {
          let indexPaths = NSMutableArray.new();
          indexPaths.addObject(NSIndexPath.indexPathForRowInSection(rowIndex, event.groupIndex));
          listView.ios.reloadItemsAtIndexPaths(indexPaths);
       });
    }

    if (isAndroid) {
       listView.androidListView.getAdapter().notifyItemChanged(rowIndex);
    }
}
templateSelector(item: any, index: number, items: any): string {
  return item.expanded ? 'expanded' : 'default';
}
}
