import { EditProfileService } from './../../../services/edit-profile.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-profile-settings",
  templateUrl: "./profile-settings.component.html",
  styleUrls: ["./profile-settings.component.scss"],
})
export class ProfileSettingsComponent {
  // names vars & types return
  FormChangePassword: FormGroup;
  isLoading: boolean;

  constructor(
    private FB: FormBuilder,
    private EditProfile: EditProfileService
  ) {
    // init vars
    this.FormChangePassword = this.FB.group({
      password: ["", Validators.required],
      "new-password": [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-zd$@$!%*?&].{8,}"
          ),
        ],
      ],
      confirmNewPassword: ["", Validators.required],
    });
    this.isLoading = false;

  }
  // if this func run => password user is change
  changePassword() {

    this.isLoading = true;
    
    this.EditProfile.editPofileSetting({
      ...this.FormChangePassword.value,
    }).subscribe((res) => this.isLoading = false);
  }
}
