import { Component, OnInit } from '@angular/core';
import { SkillsSettingsService } from '../../../../services/skill-settings';
import { UpdateSettingComponent } from './diag/update-setting/update-setting.component';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-skills-settings',
  templateUrl: './skills-settings.component.html',
  styleUrls: ['./skills-settings.component.css']
})
export class SkillsSettingsComponent implements OnInit {

  isLoading;
  settings;

  constructor(
    private skillsSettingService: SkillsSettingsService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private toastr: AppToasterService,
    public dialog: MatDialog
  ) {
      this.getSettings();
  }

  ngOnInit() {
      
  }

  getSettings() {
    this.isLoading = true;
    this.skillsSettingService.getSettings().subscribe(
      (response: any) => {
        if (response) {
          this.settings = response.data;
        }
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    )
  }
  

  edit(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.data = { id: id };


    let dialogref = this.dialog.open(UpdateSettingComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      
    });
  }
  
}