import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-profile-settings",
  templateUrl: "./profile-settings.component.html",
  styleUrls: ["./profile-settings.component.scss"],
})
export class ProfileSettingsComponent {
    // names vars & types return
    TOKEN: string;
    isSucces: boolean;
    isLoading: boolean;
    FormRestPassword: FormGroup;

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
      // this.isSucces = false;
      // this.isLoading = false;
    }

    // if this func run => password user is change
    RestPassword() {
      console.log('done');
    }
}
