import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-rest-password",
  templateUrl: "./rest-password.component.html",
  styleUrls: ["./rest-password.component.scss"],
})
export class RestPasswordComponent implements OnInit {
  // names vars & types return
  TOKEN: string;
  Email: string;
  isSucces: boolean;
  isLoading: boolean
  FormRestPassword:FormGroup;

  constructor(
    private ActiveRouter: ActivatedRoute,
    private Auth: AuthService,
    private router: Router,
    private FB: FormBuilder
  ) {
    // init vars
    this.FormRestPassword = this.FB.group({
      new_password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-zd$@$!%*?&].{8,}"
          ),
        ],
      ],
      confirmNewPassword: ["", Validators.required],
    });
    this.isSucces = false
    this.isLoading = false
  }

  ngOnInit() {
    // get Token user
    this.TOKEN = this.ActiveRouter.snapshot.paramMap.get("token");
    this.Email = this.ActiveRouter.snapshot.queryParamMap.get("email");
 }

  // navigate to LoginComponent
  navTo(page) {
    this.router.navigate([page]);
  }

  // if this func run => password user is change
  RestPassword() {
      this.isLoading = true;
      this.Auth.resrtPassword(this.TOKEN, {
        email: this.Email,
        password: this.FormRestPassword.controls.new_password.value,
      }).subscribe((res: any) => {
        this.isSucces = res.success;
        this.isLoading = false;
      });
  }

}
