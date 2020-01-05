import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { UserRegistration } from '../../shared/models/user.registration.interface';
import * as dialogs from 'tns-core-modules/ui/dialogs';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.tns.html',
  styleUrls: ['./registration-form.component.tns.scss']
})
export class RegistrationFormComponent implements OnInit {
  errors: string;
  isRequesting: boolean;
  submitted = false;
  constructor(private userService: UserService, private router: Router) { }

  userdata: UserRegistration = {email: '', firstName: '', lastName: '', password: '', address: '', username: ''};
  ngOnInit() {
  }
  registerUser() {


  dialogs.alert(this.userdata.firstName).then(() => {
    // console.log("Dialog closed!");
});
         // console.log(this.userdata.firstName);
  // tslint:disable-next-line: max-line-length
  this.userService.addUser(this.userdata.username , this.userdata.email, this.userdata.password, this.userdata.firstName, this.userdata.lastName, this.userdata.address)
                  .pipe( finalize(() => {this.isRequesting = false; }))
                  .subscribe(
                    result  => {if (result) {

                      this.ShowMessages(result.messages);
                    }},
                   ( error) => {




                    });

 }

 ShowMessages(msgs) {

  if (msgs) {
msgs.forEach(element => {
  dialogs.alert(element.body).then(() => {
    // console.log("Dialog closed!");
});
});

  }

 }

}
