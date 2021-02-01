import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rest-password",
  templateUrl: "./rest-password.component.html",
  styleUrls: ["./rest-password.component.scss"],
})
export class RestPasswordComponent implements OnInit {
  // names vars & types return
  TOKEN: string;
  newPassword: string;
  confirmNewPassword: string;
  isValid: boolean;
  isSuccess: boolean;

  constructor(
    private ActiveRouter: ActivatedRoute,
    private Auth: AuthService,
    private router: Router
  ) {
    // init vars
    this.newPassword = "";
    this.confirmNewPassword = "";
    this.isValid = false;
    this.isSuccess = false;
  }

  ngOnInit() {
    // get Token user
    this.TOKEN = this.ActiveRouter.snapshot.paramMap.get("token");
  }

  // navigate to LoginComponent
  navTo(page) {
    this.router.navigate([page]);
  }

  // if this func run => password user is change
  RestPassword(Form) {
    
    this.isValid = true;
    this.Auth.resrtPassword(this.TOKEN, {
      email: "zzmezomoazzz@gmail.com",
      password: Form.value.new_password,
    }).subscribe((res: any) => {
      this.isValid = false;
      this.isSuccess = true;
    });
  }
}
