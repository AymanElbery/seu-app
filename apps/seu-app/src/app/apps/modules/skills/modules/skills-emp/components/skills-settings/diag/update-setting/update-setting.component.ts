import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { Router, ActivatedRoute } from '@angular/router';
import * as CustomEditor from '@ckeditor/ckeditor5-build-custom/build/ckeditor';
import { FormBuilder, Validators } from '@angular/forms';
import { SkillsSettingsService } from 'src/app/apps/modules/skills/services/skill-settings';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-update-setting',
  templateUrl: './update-setting.component.html',
  styleUrls: ['./update-setting.component.scss']
})
export class UpdateSettingComponent implements OnInit {

  id;
  UpdateSettingForm;
  isLoading;
  setting ;
  message;
  submitted;

  public EditorAR = CustomEditor;
  public EditorEN = CustomEditor;
  SET_VALUE_AR: "";
  SET_VALUE_EN: "";

  toolbarConfig = {
    toolbar: ['heading', '|', 'bold', 'italic', 'Indent', '|', 'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify', '|', 'highlight', 'fontFamily', 'fontSize', 'horizontalLine', , '|', 'insertTable', '|', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo'],
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<UpdateSettingComponent>,
    private toastr: AppToasterService,
    private router: Router, 
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private translate: TranslateService,
    private skillsSettingService: SkillsSettingsService
  ) {
    this.setting = {};
    this.id = this.data.id; 
    this.isLoading = true;
    this.getSettingById();
    this.UpdateSettingForm = this.fb.group({
      'SET_VALUE_AR': ["", [Validators.required]],
      'SET_VALUE_EN': ["", [Validators.required]],
    });
  }

  ngOnInit() {

  }

  getSettingById() {
    this.skillsSettingService.getSettingById(this.id).subscribe(
      (response: any) => {
        if (response) {
          this.setting = response.data;
          this.SET_VALUE_AR = this.setting.SET_VALUE_AR;
          this.SET_VALUE_EN = this.setting.SET_VALUE_EN;
        }
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    )
  }

  onSubmit() {
    if (this.UpdateSettingForm.invalid) {
      return;
    }
    let data = this.UpdateSettingForm.value;
    data.SET_KEY = this.id;
    this.message = "settings.success_updated";
    this.submitted = true;
    this.skillsSettingService.update_setting(data).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response) {
          if (response.status) {
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant(this.message)
            }]);
          }
          this.closeDiag();
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
