import { Component, OnInit} from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.tns.html',
  styleUrls: ['./add-job.component.tns.scss']
})
export class AddJobComponent implements OnInit {

  reqData = {notes:[],RegisteredCourses:[]};
  msgs: [];
  private imageSrc = '';

  constructor(
    private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}


}
