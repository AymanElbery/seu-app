import { Component, OnInit } from '@angular/core';
import { TranslationUserService } from '../../services/translation-user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-translation-user',
  templateUrl: './translation-user.component.html',
  styleUrls: ['./translation-user.component.css']
})
export class TranslationUserComponent implements OnInit {

  constructor(private user: TranslationUserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.checkUser();
    this.user.userHasLoaded.subscribe(() => {
      this.checkUser();
    });
  }
  checkUser() {
    const role = this.user.user['ROLE'];
    let url = '';
    if (this.user.is_client()) {
      url = '../client/my-requests';
    } else {
      url = '../admin/myrequests';
    }
    this.router.navigate([url], { relativeTo: this.route });
  }

}
