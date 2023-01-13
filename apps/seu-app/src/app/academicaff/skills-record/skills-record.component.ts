import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lecture } from 'src/app/shared/models/lecture';
import { CertificateIDService } from '../services/certificate-id.service';
import { TranslateService } from '@ngx-translate/core';
import { SkillsRecordService } from '../services/skills-record.service';

@Component({
  selector: 'app-skills-record',
  templateUrl: './skills-record.component.html',
  styleUrls: ['./skills-record.component.scss']
})
export class SkillsRecordComponent implements OnInit, OnDestroy {

  constructor(private transalte: TranslateService, private service: SkillsRecordService) { }
  arabicPrint: string;
  EngPrint: string;

  isLoading = false;
  skills = [];
  texts;
  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  ngOnInit() {
    this.getReqs();
    this.subscriptions = this.transalte.onLangChange.subscribe(() => {
      this.getReqs();
    });
  }
  getReqs() {
    this.isLoading = true;
    this.arabicPrint = this.service.downloadAR();
    this.EngPrint = this.service.DownloadEN();
    this.service.getSkills().then(
      (res) => {
        this.skills = (((res) as any).data as any).skills;
        this.texts =  (((res) as any).data as any).notes;
        this.isLoading = false;
      }
    );
  }
}
