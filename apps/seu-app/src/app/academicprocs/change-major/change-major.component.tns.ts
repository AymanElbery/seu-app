import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ChangeMajorService } from '../services/change-major.service';
import { CancelCousre } from '../../shared/models/cancel-cousre';
import { AppToasterService } from '../../shared/services/app-toaster';
import * as utils from 'tns-core-modules/utils/utils';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { AddChangeMajorComponent } from './diag/add-change-major/add-change-major.component.tns';
import { RequestData } from '../../shared/models/request-data';
import { TranslateService } from '@ngx-translate/core';
declare var UIView, NSMutableArray, NSIndexPath;
import { ListViewEventData } from 'nativescript-ui-listview';
import { isIOS, isAndroid } from 'tns-core-modules/ui/page/page';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';

@Component({
  selector: 'app-change-major',
  templateUrl: './change-major.component.tns.html',
  styleUrls: ['./change-major.component.tns.scss']
})
export class ChangeMajorComponent implements OnInit {
  printAR;
  cancelCousre: CancelCousre;
  reqData:RequestData={can_add_new_request:false,notes:[],reqs:[],requests:[]};
  msgs=[];
  status;
  isLoading = false;
  constructor(private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,
      private toastr: AppToasterService, 
      private acadmicProc: ChangeMajorService,
      private translate: TranslateService,
      private downloader: DataDownLoadService) { }
  deleting = false;

  ngOnInit() {
    Downloader.init(); 
    this.isLoading = true;
    this.cancelCousre = { courses: null, agreement: 1 };
    this.getRequests();
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
      }, err => {
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }

  onTap(): void {
    const options: ModalDialogOptions = {
        viewContainerRef: this._vcRef,
        context: {},
        fullscreen: false,
    };

    this._modalService.showModal(AddChangeMajorComponent, options)
        .then( result => {
        if (this.acadmicProc.newreqs) {
          this.getRequests();
          this.acadmicProc.newreqs = false;
        }
    });
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
        // tslint:disable-next-line: triple-equals
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
