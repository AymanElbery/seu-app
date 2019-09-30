import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ObjectExamService } from 'src/app/academicprocs/services/object-exam.service';
import { ObjectExam } from 'src/app/shared/models/object-exam';

@Component({
  selector: 'app-add-exam-object',
  templateUrl: './add-exam-object.component.html',
  styleUrls: ['./add-exam-object.component.css']
})
export class AddExamObjectComponent implements OnInit {

  
reqData: any;
exam:ObjectExam;
msgs: any;
exams;
//courses:[];
//teacherName:string;
//choosedCode:string;
private imageSrc = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddExamObjectComponent>,
               private toastr: ToastrService, private acadmicProc: ObjectExamService ) { }

  ngOnInit() {
    //this.changeRequest = {camp: []};
    //this.exam = {camp:''};
    this.exam = {courses:[],bank : -1, reason:"",account_number:"",fees_amount:"",attachment:""};
    this.acadmicProc.getgetRequests().then(
      res => {
        this.acadmicProc.reqData =    (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;

        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        //this.canAdd = this.reqData.can_add_new_request;
        this.exams=this.reqData.exams;
        //console.log(this.reqData.banks[0]);
      }
        );
    
      }

  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(  res => {
   this.msgs =   (res as any).messages;
   this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);

    });
        });

    //this.cmp = {camp:''};

  }
  
  onSubmit() {
    
    /*let dropDown;
    dropDown = document.getElementById("selected_id") as HTMLSelectElement;
    let selectedItem =dropDown[dropDown.selectedIndex];
    //console.log(selectedItem.innerHTML  + "" + selectedItem.value);
    this.changeRequest.camp.push({key:selectedItem.innerHTML,value:selectedItem.value});*/
    /*if(this.changeRequest.camp.length == 0)
      return;*/
    //this.exam.fees_amount="200";
    //this.exam.account_number="4444-uu-df";
    this.addRequest(this.exam);

    this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }

  changeStatus(CourseId:string,e,index:number)
  {
    console.log(index);
    if (e.target.checked) {
      let teacherName = (document.getElementById(index.toString()) as HTMLInputElement).value;
      let teacherNameV2 = (teacherName==undefined)?"":teacherName;
      this.exam.courses.push({CRSE:parseInt(CourseId),teacher:teacherNameV2});
      
    } else {
      this.exam.courses.splice(index, 1);
      console.log(22);
    }
    console.log(this.exam.courses);

  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.exam.attachment = reader.result;
    console.log(this.exam.attachment);
  }


}