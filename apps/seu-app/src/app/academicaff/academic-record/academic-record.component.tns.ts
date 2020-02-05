import { Component, OnInit } from '@angular/core';
import { AcademicRecordService } from '../services/academic-record.service';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ListViewEventData } from 'nativescript-ui-listview';
import { isIOS, isAndroid } from 'tns-core-modules/ui/page/page';
import * as utils from 'tns-core-modules/utils/utils';
import { RecoredDataModel } from '../../shared/models/RecoredDataModel';
// tslint:disable-next-line: one-variable-per-declaration
declare var UIView, NSMutableArray, NSIndexPath;

@Component({
  selector: 'app-academic-record',
  templateUrl: './academic-record.component.tns.html',
  styleUrls: ['./academic-record.component.tns.scss']
})
export class AcademicRecordComponent implements OnInit {
  constructor(private academicService: AcademicRecordService) { }
  recoredData:RecoredDataModel= {coll:"",grade:"",major:"",ssn:"",status:"",student_name:"",terms:[]};
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;

  templateSelector(item: any, index: number, items: any): string {
    return item.expanded ? 'expanded' : 'default';
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

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right;

    this.isLoading = true;
    this.academicService.getِAcademicRecord().then(
      res => {
    this.recoredData =    (res as any).data;
    this.isLoading = false;
      }
    );
    this.arabicPrint =   this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();
  }

  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
  onArabicPrint() {
    utils.openUrl(this.arabicPrint);
  }
  onEnglishPrint() {
    utils.openUrl(this.EngPrint);
  }
}
