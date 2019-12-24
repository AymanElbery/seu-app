import { Component, OnInit, Inject } from '@angular/core';
import { ObjectExam } from 'src/app/shared/models/object-exam';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ExamObjectionService } from 'src/app/master-academic-requests/services/exam-objection.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-object-exam',
  templateUrl: './add-object-exam.component.html',
  styleUrls: ['./add-object-exam.component.scss']
})
export class AddObjectExamComponent implements OnInit {

   
reqData: any;
exam:ObjectExam;
msgs: any;
//exams;
//courses:[];
//teacherName:string;
//choosedCode:string;
//private imageSrc = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddObjectExamComponent>,
               private toastr: ToastrService, private acadmicProc: ExamObjectionService ) { }

  ngOnInit() {
    //this.changeRequest = {camp: []};
    //this.exam = {camp:''};
    this.exam = {courses:[],exams:[],bank : -1, reason:"",account_number:"",fees_amount:"",attachment:""};
    this.acadmicProc.getRequests().then(
      res => {
        this.acadmicProc.reqData =    (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.exam.exams=this.acadmicProc.reqData.exams;

        //this.canAdd = this.reqData.can_add_new_request;
        //this.exams=this.reqData.exams;
        ////console.log(this.reqData.banks[0]);
      }
        );
    
      }

  addRequest(data: any) {

    data.bank = parseInt(data.bank);
   this.acadmicProc.AddRequest(data).then(  res => {
   this.msgs =   (res as any).messages;
   this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);

    });
    //console.log(res);
        });

    //this.cmp = {camp:''};

  }
  
  onSubmit() {
    
    /*let dropDown;
    dropDown = document.getElementById("selected_id") as HTMLSelectElement;
    let selectedItem =dropDown[dropDown.selectedIndex];
    ////console.log(selectedItem.innerHTML  + "" + selectedItem.value);
    this.changeRequest.camp.push({key:selectedItem.innerHTML,value:selectedItem.value});*/
    /*if(this.changeRequest.camp.length == 0)
      return;*/
    //this.exam.fees_amount="200";
    //this.exam.account_number="4444-uu-df";
    this.addRequest(this.exam);
    //console.log(this.msgs);
    this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }

  changeStatus(item,e)
  {
   ////console.log(index);
    if (e.target.checked) {
      //console.log(item);
      //let teacherName = item.teacher;
      this.exam.courses.push({CRSE:parseInt(item.CRN),teacher:item.teacher});
      
    } else {
     // let id = e.target.getAttribute('data-CheckBoxId');
      ////console.log(e.target);
      for(let i = 0 ; i<this.exam.courses.length;i++)
      {
        if(this.exam.courses[i].CRSE ==item.CRN)
          this.exam.courses.splice(i, 1);

      }
      //this.exam.courses.splice(index, 1);
      ////console.log(22);
    }
   // //console.log(this.exam.courses);

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
    //console.log(this.exam.attachment);
  }


}