import { Component, OnInit } from '@angular/core';
import { TranslationUserService } from '../../services/translation-user';

@Component({
  selector: 'app-translation-landing',
  templateUrl: './translation-landing.component.html',
  styleUrls: ['./translation-landing.component.css']
})
export class TranslationLandingComponent implements OnInit {
  sso = false;
  constructor(private user: TranslationUserService) {
    this.sso = this.user.is_sso();
    this.user.userHasLoaded.subscribe(() => {
      this.sso = this.user.is_sso();
    })
  }

  ngOnInit() {
  }

}
