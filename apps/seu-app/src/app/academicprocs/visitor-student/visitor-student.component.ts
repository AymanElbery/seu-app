import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { VisitorStudentService } from "../services/visitor-student.service";
import { AddVisitorStudentComponent } from "./diag/add-visitor-student/add-visitor-student.component";

@Component({
  selector: "app-visitor-student",
  templateUrl: "./visitor-student.component.html",
  styleUrls: ["./visitor-student.component.scss"]
})
export class VisitorStudentComponent implements OnInit {
  reqData;
  msgs;
  status;
  isLoading = false;
  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private acadmicProc: VisitorStudentService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.acadmicProc.getِgetRequests().then(res => {
      this.acadmicProc.reqData = (res as any).data;
      this.acadmicProc.msgs = (res as any).messages;
      this.reqData = this.acadmicProc.reqData;
      this.msgs = this.acadmicProc.msgs;
      this.isLoading = false;
    });
  }

  delete(id, index) {
    if (confirm("هل انت متأكد")) {
      this.acadmicProc.deleteReq(id).then(res => {
        //console.log(id);
        this.msgs = (res as any).messages;

        this.status = (res as any).status;

        this.msgs.forEach((element: any) => {
          this.toastr.success("", element.body);
        });
        if (this.status == 1) {
          this.acadmicProc.reqData.requests.splice(index, 1);
        }
      });
    }
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    // dialogConfig.width = '80%';
    // dialogConfig.height = '80%';
    // dialogConfig.direction = "rtl";
    // dialogConfig.position = { top: '100px', left: '25px' };
    this.dialog.open(AddVisitorStudentComponent, dialogConfig);
  }

  printRequest(requestNbr) {
    return this.acadmicProc.Download(requestNbr);
  }
}
