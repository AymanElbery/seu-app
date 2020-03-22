import { Component, OnInit } from '@angular/core';
import { LectureExecuseServiceService } from '../services/lecture-execuse-service.service';
import { LectureExecuse } from '../../shared/models/lecture-execuse';
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
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';

@Component({
  selector: 'app-lectures-execuses',
  templateUrl: './lectures-execuses.component.tns.html',
  styleUrls: ['./lectures-execuses.component.tns.scss']
})
export class LecturesExecusesComponent implements OnInit {

  printAR;
  lectureExecuse: LectureExecuse;
  reqData:RequestData={can_add_new_request:false,notes:[],reqs:[],requests:[]};
  msgs=[];
  isLoading = false;

  constructor(private routerExtensions: RouterExtensions, 
    private toastr: AppToasterService, 
    private acadmicProc: LectureExecuseServiceService,
    private translate: TranslateService,
    private downloader: DataDownLoadService) { }

  ngOnInit() {
    Downloader.init(); 
    this.isLoading = true;
    this.lectureExecuse = { attachment: '', courses: [], date: '', reason: '', type: '', week: '' };
    this.getRequests();
  }
  getRequests() {
    this.acadmicProc.getRequests().then(
      res => {
        //console.log(res);
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
      }
    );
  }



  print(req) {
    this.downloader.downloadFile(this.acadmicProc.Download(req));
    console.log('downloiad');
    this.printAR = '1%';
    this.downloader.csize.subscribe(x => {
      console.log("xxxx",x)
      this.printAR = x;
    });

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
  onTap(){
    this.routerExtensions.navigate(['/procedures/addlecexecuse'], {
      transition: {
          name: 'fade'
      }
  });
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
