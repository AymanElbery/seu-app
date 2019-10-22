import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AcademicStatusService } from '../services/academic-status.service';

@Component({
  selector: 'app-academic-status',
  templateUrl: './academic-status.component.html',
  styleUrls: ['./academic-status.component.css']
})
export class AcademicStatusComponent implements OnInit {
  reqData;
  msgs;
  status;
  isLoading = false;
  constructor( private toastr: ToastrService, private stdData: AcademicStatusService) { }

  ngOnInit() {
    this.isLoading=true;

    this.stdData.getRequests().then(
      res => {
        this.stdData.reqData = (res as any).data;
        this.stdData.msgs = (res as any).messages;
        this.reqData = this.stdData.reqData;
        this.msgs = this.stdData.msgs;
        this.isLoading=false;
        console.log(this.reqData);
      }
    );
  }

}
