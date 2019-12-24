import { Component, OnInit } from "@angular/core";
import { Credentials } from "../../shared/models/credentials.interface";
import { Subscription } from "rxjs";
import { UserService } from "../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { finalize } from "rxjs/operators";
import { UserManagerService } from "../../shared/services/user-manager.service";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.tns.html",
  styleUrls: ["./login-form.component.tns.css"]
})
export class LoginFormComponent implements OnInit {
  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { email: "", password: "" };
  constructor(
    private userService: UserService,
    private userManger: UserManagerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.brandNew = param["brandNew"];
        this.credentials.email = param["email"];
      }
    );
   // this.userManger.logout();
  }

  login(value: Credentials) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = "";

    this.userService
      .login(value.email, value.password)
      .pipe(finalize(() => (this.isRequesting = false)))
      .subscribe(
        result => {
          //console.log(result.data);
          if (result.status == 1) {
            this.userManger.saveToken(result.data);

            this.userManger.login();
            this.router.navigate(["/dashboard/home"]);
          } else {
            dialogs.alert("Invalid username or password").then(() => {
              //console.log("Dialog!");
            });
            if (result.messages) {
              this.errors = result.messages[0].body;
            }
          }
        },
        error => {
          this.errors = error;
          dialogs.alert(error).then(() => {
            //console.log("Dialog closed!");
          });
        }
      );
  }
  viewCertificate(){
    this.router.navigate(["/academicaff/certificate"]);
  }

  items=[
    {
      id:123,
      subject:"English Skills",
      day:"sunday",
      time:"(4:00 pm → 5:50 pm)"	
    }
  ]
  ngOnInit() {}
  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }
}
