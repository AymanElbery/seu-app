import { Component, OnInit } from '@angular/core';
import { AbseneQueryService } from '../services/absene-query.service';

@Component({
  selector: 'app-absence-query',
  templateUrl: './absence-query.component.html',
  styleUrls: ['./absence-query.component.scss']
})
export class AbsenceQueryComponent implements OnInit {
  isLoading:boolean=false;
  reqData;
  msgs;
  constructor(private otherReq: AbseneQueryService) { }

  ngOnInit() {
    this.isLoading=true;

    this.otherReq.getRequests().then(
      res => {
        this.otherReq.reqData = (res as any).data;
        this.otherReq.msgs = (res as any).messages;
        this.reqData = this.otherReq.reqData;
        this.msgs = this.otherReq.msgs;
        this.isLoading=false;

      }
    );
  }

}
