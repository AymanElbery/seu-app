import { Component, OnInit } from '@angular/core';
import { TranslationUserService } from '../../../../services/translation-user';

@Component({
  selector: 'app-translation-auth',
  templateUrl: './translation-auth.component.html',
  styleUrls: ['./translation-auth.component.css']
})
export class TranslationAuthComponent implements OnInit {
  constructor(private user: TranslationUserService) {
  }
  ngOnInit() {
  }

}
