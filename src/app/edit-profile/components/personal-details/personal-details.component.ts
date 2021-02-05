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
  FormeditPersonalDetalis;

  constructor(private FB: FormBuilder) {
    // init vars
    this.FormeditPersonalDetalis = this.FB.group({
      fullName: ["", Validators.required],
      nationality: ["", Validators.required],
      id_number: ["", Validators.required],
      counter: ["", Validators.required],
      email: ["", Validators.required],
      phone_number: ["", Validators.required],
    });
  }

  ngOnInit() {}

  editPersonalDetalis() {
    console.log(this.FormeditPersonalDetalis);
  }
}
