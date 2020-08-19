import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { StudentCoursesService } from 'src/app/apps/modules/skills/services/skill-std-course';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-std-excuse',
  templateUrl: './skills-std-excuse.component.html',
  styleUrls: ['./skills-std-excuse.component.css']
})
export class SkillsStdExcuseComponent implements OnInit {


  attnd_id;
  addExcuseFile: FormGroup;
  FILE_DATA;
  submitted;
  fileName;
  isLoading;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<SkillsStdExcuseComponent>,
    private toastr: AppToasterService,
    private stdService: StudentCoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private translate: TranslateService
  ) {
    this.attnd_id = this.data.attnd_id;
    this.addExcuseFile = this.fb.group({
      'EXCUSE_REASON': ['', [Validators.required]],
      'EXCUSE_FILE': [''],
      'ATTND_ID': [this.attnd_id],
      'FILE_NAME': ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  handleInputChange(e) {
    this.fileName = null;
    this.addExcuseFile.controls['FILE_NAME'].setValue(null);
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!file) {
      return false;
    }
    if (!this.validateFile(file.name)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("course_files.wrong_file") }]);
      return false;
    }
    if (!this.validateFileSize(file.size)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("course_files.wrong_file_size") }]);
      return false;
    }
    this.fileName = file.name;
    this.addExcuseFile.controls['FILE_NAME'].setValue(file.name);
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.FILE_DATA = reader.result;
  }

  validateFileSize(size) {
    return (size < 1000000) ? true : false;
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (['pdf'].includes(ext.toLowerCase())) {
      return true;
    }
    return false;
  }

  onSubmit() {
    this.isLoading = true;
    if (this.addExcuseFile.invalid) {
      return;
    }
    this.submitted = true;
    let data = this.addExcuseFile.value;
    data.EXCUSE_FILE = this.FILE_DATA;
    this.stdService.addExcuse(data).subscribe(
      (response: any) => {
        if (response) {
          if (response.status) {
            this.stdService.notifySucc(response['res_code']);
            this.closeDiag({ refresh: true });
          } else {
            this.stdService.notifyError(response['res_code']);
          }
          this.isLoading = false;
          this.submitted = false;
        }
      },
      error => {
        this.isLoading = false;
        this.submitted = false;
        this.stdService.tryagain();
      }
    );
  }

  closeDiag(obj = {}) {
    this.dialogRef.close(obj);
  }
}
