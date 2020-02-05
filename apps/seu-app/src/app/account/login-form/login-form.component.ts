import { Component, OnInit, OnDestroy } from '@angular/core';
import { Credentials } from '../../shared/models/credentials.interface';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { UserManagerService } from '../../shared/services/user-manager.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit,OnDestroy {

  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted = false;
  credentials: Credentials = { email: '', password: '' };
  // tslint:disable-next-line: max-line-length
  constructor(private userService: UserService, private userManger: UserManagerService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
         this.brandNew = param.brandNew;
         this.credentials.email = param.email;
      });

   }

   login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';

  }

  ngOnInit() {
  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

}
