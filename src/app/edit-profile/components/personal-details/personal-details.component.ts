import { EditProfileService } from './../../../services/edit-profile.service';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-personal-details",
  templateUrl: "./personal-details.component.html",
  styleUrls: ["./personal-details.component.scss"],
})
export class PersonalDetailsComponent implements OnInit {

  // name vars
  isloading: boolean
  FormeditPersonalDetalis;

  constructor(private FB: FormBuilder, private EditProfile: EditProfileService) {
    // init vars
    this.FormeditPersonalDetalis = this.FB.group({
      fullName: ["", Validators.required],
      nationality: ["", Validators.required],
      id_number: ["", Validators.required],
      counter: ["select", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      phone_number: ["", [Validators.required, Validators.minLength(8)]],
    });
    this.isloading = false
  }

  ngOnInit() {}

  editPersonalDetalis() {

    this.isloading = true;
    // here string value chnage to array to obj
    var splitfullName = this.FormeditPersonalDetalis.value.fullName;
    splitfullName = splitfullName.split(" ");
    // destructuring es6 
    const [first_name, middle_name, last_name] = splitfullName;

    // run function EditProfile to post editPersonalDetails
    this.EditProfile.editPersonalDetails({
      first_name,
      middle_name,
      last_name,
      ...this.FormeditPersonalDetalis.value,
    }).subscribe((res: any) => this.isloading = false);
  }
}
