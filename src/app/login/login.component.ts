import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [AuthService],
})
export class LoginComponent {

  // names vars & types return
  user: any = {};
  error: any;
  open: boolean;
  isSuccess: boolean;
  isLoading: boolean;

  constructor(private router: Router, private authService: AuthService, private loader: NgxUiLoaderService) {

    // init vars
    this.open = false;
    this.isSuccess = false;
    this.isLoading = false

   }


  navTo(page) {
    this.router.navigate([page]);
  }

  landing() {
    window.location.href = "/";
  }

  login() {
    this.loader.start();
    this.authService.login(this.user).subscribe(
      (res: any) => {
        const accessToken = res.data.token;
        const userData = res.data;
        localStorage.setItem("iprotect__token", accessToken);
        localStorage.setItem("iprotect__user", JSON.stringify(userData));
        let page =
          userData["profile_completed"] == 0 ? "complete-profile" : "dashboard";
        this.router.navigate([page]);
        this.loader.stop();
      },
      (err: any) => {
        this.error = err.error.message;
        this.loader.stop();
      }
    );
  }

  // if this func run => the app-box-forgt-password is show
  openPopup() {
    this.open = true
  }

  // if this func run  the app-box-forgt-password and app-succes-forgot-password is hide
  closeAll() {
    // run this code if email user true & code reste password is send to email user
    if (!this.isLoading) {
      this.open = false
      this.isSuccess = false
    }
  }

}
