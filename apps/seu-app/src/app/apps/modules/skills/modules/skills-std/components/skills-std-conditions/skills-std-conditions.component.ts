import { Component, OnInit } from '@angular/core';
import { SkillsSettingsService } from '../../../../services/skill-settings';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-skills-std-conditions',
  templateUrl: './skills-std-conditions.component.html',
  styleUrls: ['./skills-std-conditions.component.css']
})
export class SkillsStdConditionsComponent implements OnInit {

    condition ;
    isLoading = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private settingService: SkillsSettingsService
    ) { 
        this.getSettings();
    }

    ngOnInit() {
      
    }

    stripedHtml(htmlString) {
        // if (!htmlString)
        //   return '';
        // return htmlString.replace(/<[^>]+>/g, '')
        return htmlString;
    }

    getSettings() {
        this.isLoading = true;
        this.settingService.getSettingById(1).subscribe(
            (response: any) => {
                if (response) {
                this.condition = response.data;
                }
                this.isLoading = false;
            },
            error => {
                this.isLoading = false;
            }
        )
    }
}