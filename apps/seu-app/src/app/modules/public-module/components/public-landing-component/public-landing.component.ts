import { Component } from '@angular/core';
import { UserService } from '../../../../account/services/user.service';
import { CardService } from '../../services/card.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-landing',
  styleUrls: ['./public-landing.component.css'],
  templateUrl: './public-landing.component.html'
})
export class PublicLandingComponent {

  constructor(
    public userService: UserService,
    private cardService: CardService,
    public translate: TranslateService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
  }
}