import { Component, OnInit } from '@angular/core';
import { SkillsSettingsService } from '../../../../services/skill-settings';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-skills-std-standards',
  templateUrl: './skills-std-standards.component.html',
  styleUrls: ['./skills-std-standards.component.css']
})
export class SkillsStdStandardsComponent implements OnInit {

    standard ;
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
        this.settingService.getSettingById(2).subscribe(
            (response: any) => {
                if (response) {
                this.standard = response.data;
                }
                this.isLoading = false;
            },
            error => {
                this.isLoading = false;
            }
        )
    }
}