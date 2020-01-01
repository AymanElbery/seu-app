import { Component, OnInit } from '@angular/core';
import { AcademicRecordService } from '../services/academic-record.service';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ListViewEventData } from 'nativescript-ui-listview';
import { isIOS, isAndroid } from 'tns-core-modules/ui/page/page';
declare var UIView, NSMutableArray, NSIndexPath;

@Component({
  selector: 'app-academic-record',
  templateUrl: './academic-record.component.tns.html',
  styleUrls: ['./academic-record.component.tns.scss']
})
export class AcademicRecordComponent implements OnInit {

  termsStatic=[
    {"Term":"الاول","Year":"2018","Major":"الحوسبة والمعلوماتية","Status":"منتظم",
    "courses":[{
      "ID":"205030",
      "CRSE_TITLE":"اتصالات",
      "GRADE_TITLE":"الاولى",
      "HRS":"50",
      "Points":"100"
    },
    {
      "ID":"2041070",
      "CRSE_TITLE":"علوم حاسب",
      "GRADE_TITLE":"الثانية",
      "HRS":"40",
      "Points":"120"
    }
  ]},
    {"Term":"الثانى","Year":"2020","Major":"الحوسبة والمعلوماتية","Status":"منتظم",
    "courses":[{
      "ID":"2041070",
      "CRSE_TITLE":"علوم حاسب",
      "GRADE_TITLE":"الثانية",
      "HRS":"40",
      "Points":"120"
    },
    {
      "ID":"205030",
      "CRSE_TITLE":"اتصالات",
      "GRADE_TITLE":"الاولى",
      "HRS":"50",
      "Points":"100"
    }

  ]
  }

  ];

  templateSelector(item: any, index: number, items: any): string {
    return item.expanded ? "expanded" : "default";
}

onItemTap(event: ListViewEventData) {
    const listView = event.object,
        rowIndex = event.index,
        dataItem = event.view.bindingContext;

    dataItem.expanded = !dataItem.expanded;
    if (isIOS) {
      // Uncomment the lines below to avoid default animation
      UIView.animateWithDurationAnimations(0, () => {
          var indexPaths = NSMutableArray.new();
          indexPaths.addObject(NSIndexPath.indexPathForRowInSection(rowIndex, event.groupIndex));
          listView.ios.reloadItemsAtIndexPaths(indexPaths);
       });
    }

    if (isAndroid) {
       listView.androidListView.getAdapter().notifyItemChanged(rowIndex);
    }
}
  recoredData;
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  constructor(private academicService: AcademicRecordService) { }

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
}
