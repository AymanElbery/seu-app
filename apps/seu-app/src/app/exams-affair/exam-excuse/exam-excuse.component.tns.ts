import { Component, OnInit } from '@angular/core';
import { ExamExcuseService } from '../services/exam-excuse.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RequestData } from '../../shared/models/request-data';
declare var UIView, NSMutableArray, NSIndexPath;
import { ListViewEventData } from 'nativescript-ui-listview';
import { isIOS, isAndroid } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-exam-excuse',
  templateUrl: './exam-excuse.component.tns.html',
  styleUrls: ['./exam-excuse.component.tns.scss']
})
export class ExamExcuseComponent implements OnInit {


  reqData:RequestData={can_add_new_request:false,notes:[],requests:[],reqs:[]};
  msgs=[];
  status;
  isLoading = false;
  clicked: any;

  constructor(private toastr: AppToasterService,
     private acadmicProc: ExamExcuseService,
     private routerExtensions: RouterExtensions,
     private translate: TranslateService,) { }

     clickme(item) {
      this.clicked = item;
    }
    uclickme(item) {
      this.clicked = {};
    }
    
  ngOnInit() {
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
      }
    );
  }


  deleting = false;
  delete(id, index) {
    dialogs.confirm({
        title:this.translate.instant('general.delete_confirm'),
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
    this.routerExtensions.navigate(['/exams/addexamexcuse'], {
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