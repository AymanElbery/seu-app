import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { GraduateProfileService } from '../services/graduate-profile.service';

@Component({
  selector: 'app-graduate-profile',
  templateUrl: './graduate-profile.component.html',
  styleUrls: ['./graduate-profile.component.css']
})
export class GraduateProfileComponent implements OnInit {


  reqData;
  msgs;
  status;
  isLoading = false;
  constructor(public dialog: MatDialog, private toastr: ToastrService, private gradProfServ: GraduateProfileService) { }


  ngOnInit() {
    this.isLoading = true;

    this.gradProfServ.getRequest().then(
      res => {
        this.gradProfServ.reqData = (res as any).data;
        this.gradProfServ.msgs = (res as any).messages;
        this.reqData = this.gradProfServ.reqData;
        this.msgs = this.gradProfServ.msgs;
        this.isLoading = false;
        // console.log(this.reqData.requests);
      }
    );
  }

}
