import { Component, OnInit, OnDestroy } from '@angular/core';
import { Credentials } from '../../shared/models/credentials.interface';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { UserManagerService } from '../../shared/services/user-manager.service';
import * as dialogs from 'tns-core-modules/ui/dialogs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.tns.html',
  styleUrls: ['./login-form.component.tns.css']
})
export class LoginFormComponent implements OnInit , OnDestroy {
  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted = false;
  credentials: Credentials = { email: '', password: '' };
  constructor(
    private userService: UserService,
    private userManger: UserManagerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.brandNew = param.brandNew;
        this.credentials.email = param.email;
      }
    );
   // this.userManger.logout();
  }

  login(value: Credentials) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    this.router.navigate(['/home']);
   /**  this.userService
      // tslint:disable-next-line: jsdoc-format
      .login(value.email, value.password)
      .pipe(finalize(() => (this.isRequesting = false)))
      .subscribe(
        result => {
          // console.log(result.data);
          if (result.status == 1) {
            this.userManger.saveToken(result.data);

            this.userManger.login();
            this.router.navigate(['/dashboard/home']);
          } else {
            dialogs.alert('Invalid username or password').then(() => {
              // console.log("Dialog!");
            });
            if (result.messages) {
              this.errors = result.messages[0].body;
            }
          }
        },
        error => {
          this.errors = error;
          dialogs.alert(error).then(() => {
            // console.log("Dialog closed!");
          });
        }
      );*/
  }

  ngOnInit() {}
  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }
}
