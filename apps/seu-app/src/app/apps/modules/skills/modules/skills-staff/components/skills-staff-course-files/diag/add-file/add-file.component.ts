import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffFileService } from 'src/app/apps/modules/skills/services/skill-staff-file';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit {

  course_id;
  urlCheck = false;
  fileCheck = false;
  AddCourseFileForm: FormGroup;
  FILE_NAME;
  submitted;
  fileName;
  isLoading;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddFileComponent>,
    private toastr: AppToasterService,
    private staffFileService: StaffFileService,
    private router: Router, 
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private translate: TranslateService
  ) {
    this.course_id = this.data.course_id; 
    this.AddCourseFileForm = this.fb.group({
      'TITLE': ['', [Validators.required]],
      'TYPE': ['', [Validators.required]],
      'FILE': [''],
      'URL': [''],
    });
  }

  ngOnInit() {

  }

  changeFileType(value){
    if (value == 'url') {
      this.urlCheck = true;
      this.fileCheck = false;
    } else if(value == 'file') {
      this.urlCheck = false;
      this.fileCheck = true;
    }else{
      this.urlCheck = false;
      this.fileCheck = false;
    }
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!file) {
      return false;
    }
    this.fileName = file.name;
    if (!this.validateFile(file.name)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("course_files.wrong_file") }]);
      return false;
    }
    if (!this.validateFileSize(file.size)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("course_files.wrong_file_size") }]);
      return false;
    }
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.FILE_NAME = reader.result;
  }

  validateFileSize(size){
    return (size < 5000000) ? true : false;
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (['pdf', 'xls', 'xlsx', 'doc', 'docx', 'pptx', 'pptm', 'ppt', 'zip'].includes(ext.toLowerCase())) {
      return true;
    }
    return false;
  }

  onSubmit() {
    this.isLoading = true;
    if (this.AddCourseFileForm.invalid) {
      return;
    }
    this.submitted = true;
    let data = this.AddCourseFileForm.value;
    data.FILE_NAME = this.FILE_NAME;
    data.COURSE_ID = this.course_id;

    this.staffFileService.addFile(data).subscribe(
      (response: any) => {
        if (response) {
          if (response.status) {
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant("course_files.success_file_uploaded")
            }]);
          } else {
            this.toastr.push([{
              'type': 'error',
              'body': this.translate.instant("courses.wrong_file_uploaded")
            }]);
          }
          this.closeDiag({refresh : true});
          this.isLoading = false;
          this.submitted = false;
        }
      },
      error => {
        this.isLoading = false;
        this.submitted = false;
      }
    );
  }

  closeDiag(obj={}) {
    this.dialogRef.close(obj);
  }

}
