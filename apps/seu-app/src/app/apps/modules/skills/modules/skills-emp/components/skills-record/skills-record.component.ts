import { Component, OnInit } from '@angular/core';
import { SkillsCourseService } from '../../../../services/skill-course';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-skills-record',
  templateUrl: './skills-record.component.html',
  styleUrls: ['./skills-record.component.css']
})
export class SkillsRecordComponent implements OnInit {

    filter_text;
    skills;
    isLoading;
    listActive = true;
    loading = {};
    constructor(
        private skillsCourseService: SkillsCourseService,
        private router: Router,
        private route: ActivatedRoute,
        private translate: TranslateService,
        private toastr: AppToasterService,
    ) {
    }

    ngOnInit() {
        this.getAllCompletedSkills();
    }

    getAllCompletedSkills() {
        this.isLoading = true;
        this.skillsCourseService.getAllCompletedSkills().subscribe(
        (response: any) => {
            if (response) {
            this.skills = response.data;
            }
            this.isLoading = false;
        },
        error => {
            this.isLoading = false;
        }
        )
    }

    details(std_id){
        this.router.navigate(["../student-skill-record/" + std_id], { relativeTo: this.route });
    }

}
