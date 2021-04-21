import { Component, OnInit } from '@angular/core';
import { SkillsSettingsService } from '../../../../services/skill-settings';

@Component({
  selector: 'app-skills-courses-conditions',
  templateUrl: './skills-courses-conditions.component.html',
  styleUrls: ['./skills-courses-conditions.component.css']
})
export class CoursesConditionsComponent implements OnInit {

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
    this.settingService.getSettingById(3).subscribe(
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
