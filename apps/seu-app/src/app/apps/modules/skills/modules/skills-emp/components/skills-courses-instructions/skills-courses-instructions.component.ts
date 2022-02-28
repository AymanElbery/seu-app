import { Component, OnInit } from '@angular/core';
import { SkillsSettingsService } from '../../../../services/skill-settings';

@Component({
  selector: 'app-skills-courses-instructions',
  templateUrl: './skills-courses-instructions.component.html',
  styleUrls: ['./skills-courses-instructions.component.css']
})
export class CoursesInstructionsComponent implements OnInit {

  conditionDesc = "" ;
  isLoading = false;
  constructor(
    private settingService: SkillsSettingsService
  ) {
    this.getSettings();
  }

  ngOnInit() {
  }

  stripedHtml(htmlString) {
    return htmlString;
  }

  getSettings() {
    this.isLoading = true;
    this.settingService.getSettingById(4).subscribe(
        (response: any) => {
            if (response) {
              this.conditionDesc = response.data;
            }
            this.isLoading = false;
        },
        error => {
            this.isLoading = false;
        }
    )
  }

}
